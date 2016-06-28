'use strict';

const MAX_LIMIT = 30;

const mongoose = require('mongoose');
const mediator = require('./mediator')();
const Auction = mongoose.model('Auction');
const Bidder = mongoose.model('Bidder');

/**
 *  Auction manager representing all business logic for a auction
 */
class AuctionManager {
  /**
   *  Create a auction manager
   */
  constructor() {}

  /**
   *  Get all autions
   *
   *  @param {object} query - criteria used to query the DB
   *  @param {number} limit - number of records to return
   *  @param {number} skip - how many records to skip
   *  @param {function} callback
   */
  getAllAuctions(query, limit, skip, callback) {
    if (limit > MAX_LIMIT) {
      limit = MAX_LIMIT;
    }

    Auction
    .find(query)
    .limit(limit)
    .skip(skip)
    .exec(callback);
  }

  findById(id, callback) {
    Auction.findById(id, callback);
  }

  joinAuction(bidderId, auctionId, callback) {
    Bidder.findById(bidderId, (err, bidder) => {
      if (err) {
        return callback(err);
      }

      bidder.auctions.push({ auction: auctionId });
      bidder.save((err, updatedBidder) => {
        if (err) {
          return callback(err);
        }

        mediator.emit('bidder:joined:auction', updatedBidder);
        callback(null, updatedBidder);
      });
    });
  }

  /**
   *  Push a new bid entry to the bids list
   *
   *  @param {string} auctionId
   *  @param {string} bidderId
   *  @param {number} amount
   *  @param {function} callback
   */
  placeBid(auctionId, bidderId, amount, callback) {
    if (amount <= 0) {
      let err = new Error('Bid amount cannot be negative.');
      err.type = 'negative_bit_amount';
      err.status = 409;
      return callback(err);
    }

    let bid = {
      bidder: bidderId,
      amount: amount
    };

    Auction.update(
      // query
      {
        _id: auctionId.toString()
      },
      // update
      {
        currentPrice: { $inc: amount },
        bids: { $push: bid }
      },
      // results
      (err, result) => {
        if (err) {
          return callback(err);
        }

        if (result.nModified === 0) {
          let err = new Error('Could not place bid.');
          err.type = 'new_bid_error';
          err.status = 500;
          return callback(err);
        }

        mediator.emit('auction:new:bid', bid);
        callback(null, bid);
      }
    );
  }
}

module.exports = AuctionManager;
