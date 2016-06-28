import { Injectable } from 'angular2/core';
import { Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { AuthHttp } from '../auth/index';
import { contentHeaders } from '../common/headers';
import { Auction } from './auction.model';
import { SubjectAuction, ObservableAuction, ObservableAuctions } from './types';

const URL = 'api/auctions';

@Injectable()
export class AuctionService {
  public currentAuction: SubjectAuction = new BehaviorSubject<Auction>(new Auction());
  public auctions: ObservableAuctions;
  public auction: ObservableAuction;

  private _authHttp: AuthHttp;
  private _auctionObservers: any;
  private _auctionsObservers: any;
  private _dataStore: { auctions: Array<Auction>, auction: Auction };

  constructor(authHttp: AuthHttp) {
    this._authHttp = authHttp;
    this.auction = new Observable(observer => this._auctionObservers = observer).share();
    this.auctions = new Observable(observer => this._auctionsObservers = observer).share();
    this._dataStore = { auctions: [], auction: new Auction() };
  }

  public getAll() {
    this._authHttp
    .get(URL, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((data) => {
      return data.map((auction) => {
        return new Auction(
          auction._id,
          auction.item,
          auction.startingPrice,
          auction.currentPrice,
          auction.endPrice,
          auction.minAmount,
          auction.bids,
          auction.status,
          auction.startsAt,
          auction.endsAt,
          auction.createdAt
        );
      });
    })
    .subscribe(auctions => {
      this._dataStore.auctions = auctions;
      this._auctionsObservers.next(this._dataStore.auctions);
    }, err => console.error(err));
  }

  public getOne(id) {
    this._authHttp
    .get(`${URL}/${id}`)
    .map((res: Response) => res.json())
    .map((data) => {
      return new Auction(
        data._id,
        data.item,
        data.startingPrice,
        data.currentPrice,
        data.endPrice,
        data.minAmount,
        data.bids,
        data.status,
        data.startsAt,
        data.endsAt,
        data.createdAt
      );
    })
    .subscribe(auction => {
      this._dataStore.auction = auction;
      this._auctionObservers.next(this._dataStore.auction);
    }, err => console.error(err));
  }

  public setCurrentAuction(auction: Auction) {
    this.currentAuction.next(auction);
  }
}
