export class Bidder {
  _id:            string;
  profileId:      string;
  additionalData: any;
  auctions:       Array<any>;
  createdAt:      string

  constructor(
    _id?:            string,
    profileId?:      string,
    additionalData?: any,
    auctions?:       Array<any>,
    createdAt?:      string
  ) {
    this._id = _id;
    this.profileId = profileId;
    this.additionalData = additionalData;
    this.auctions = auctions;
    this.createdAt = createdAt;
  }
}
