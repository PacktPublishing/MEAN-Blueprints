import { Money } from '../common/index';

export class Auction {
  _id:            string;
  identifier:     string;
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
    createdAt?:      string,
    identifier?:     string
  ) {
    this._id = _id;
    this.item = item || { slug: '' };
    this.startingPrice = startingPrice || new Money();
    this.currentPrice = currentPrice || this.startingPrice;
    this.endPrice = endPrice || new Money();
    this.minAmount = minAmount || new Money();
    this.bids = bids || [];
    this.status = status;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
    this.createdAt = createdAt;
    this.identifier = identifier || `${this.item.slug}-${this._id}`;
  }
}
