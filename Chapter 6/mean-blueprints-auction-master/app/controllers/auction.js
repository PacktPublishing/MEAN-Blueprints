'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const Auction = mongoose.model('Auction');
const AuctionManager = require('../services/auction-manager');
const auctionManager = new AuctionManager();

module.exports.getAll = getAllAuctions;
module.exports.findById = findAuctionById;

function getAllAuctions(req, res, next) {
  let limit = +req.query.limit || 30;
  let skip = +req.query.skip || 0;
  let query = _.pick(req.query, ['status', 'startsAt', 'endsAt']);

  auctionManager.getAllAuctions(query, limit, skip, (err, auctions) => {
    if (err) {
      return next(err);
    }

    req.resources.auctions = auctions;
    next();
  });
}

function findAuctionById(req, res, next) {
  auctionManager.findById(req.params.auctionId, (err, auction) => {
    if (err) {
      return next(err);
    }

    req.resources.auction = auction;
    next();
  });
}
