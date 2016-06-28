import { Bidder } from './bidder';

export class Auction {
  _id:            string;
  item:           any;
  startingPrice:  any;
  currentPrice:   any;
  endPrice:       any;
  minAmount:      any;
  bids:           Array<any>;
  status:         string;
  startsAt:       string;
  endsAt:         string;
  createdAt:      string

  constructor(
    _id?:            string,
    item?:           any,
    startingPrice?:  any,
    currentPrice?:   any,
    endPrice?:       any,
    minAmount?:      any,
    bids?:           Array<any>,
    status?:         string,
    startsAt?:       string,
    endsAt?:         string,
    createdAt?:      string
  ) {
    this._id = _id;
    this.item = item;
    this.startingPrice = startingPrice;
    this.currentPrice = currentPrice;
    this.endPrice = endPrice;
    this.minAmount = minAmount;
    this.bids = bids;
    this.status = status;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
    this.createdAt = createdAt;
  }
}
