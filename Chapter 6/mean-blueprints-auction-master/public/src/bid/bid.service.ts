import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { SubjectBid, ObservableBids } from './types';
import { SocketService } from '../common/index';
import { AuctionService } from '../auction/index';
import { Bid } from './bid.model';

@Injectable()
export class BidService {
  // public bid: SubjectBid;
  public bid: any;
  public currentAuction: any;
  private _socketService: SocketService;
  private _auctionService: AuctionService;

  constructor(
    socketService: SocketService,
    auctionService: AuctionService
  ) {
    this._socketService = socketService;
    this._auctionService = auctionService;
    this.currentAuction = {};
    this._auctionService.currentAuction.subscribe((auction) => {
      this.currentAuction = auction;
    });
    // this.bid = new BehaviorSubject<Bid>(new Bid());
    // this._socketService.bid.filter((data) => {
    //   return data.auctionId === this.currentAuction._id;
    // }).subscribe(this.bid);
    this.bid = this._socketService.bid.filter((data) => {
      return data.auctionId === this.currentAuction._id;
    });
  }

  public placeBid(auctionId: string, bid: Bid) {
    this._socketService.emit('place:bid', {
      auctionId: auctionId,
      amount: bid.amount
    });
  }
}
