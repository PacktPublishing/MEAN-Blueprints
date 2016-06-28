// import { Injectable } from 'angular2/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
// import { SocketService } from './socket.service';
// import { Bid } from '../datatypes/bid';
// import { ObservableBids } from '../datatypes/custom-types';
//
// @Injectable()
// export class BidService {
//   public bids: ObservableBids;
//
//   private _socketService: SocketService;
//   private _bidsObservers: any;
//   private _dataStore: { bids: Array<Bid> };
//
//   constructor(socketService: SocketService) {
//     this._socketService = socketService;
//     this.bids = new Observable(observer => this._bidsObservers = observer).share();
//     this._dataStore = { bids: [] };
//     this._socketService.bid.subscribe(bid => this.storeBid(bid));
//   }
//
//   public placeBid(auctionId: string, bid: Bid) {
//     this._socketService.emit('place:bid', {
//       auctionId: auctionId,
//       amount: bid.amount
//     });
//   }
//
//   public storeBids(bids: Array<Bid>) {
//     this._dataStore.bids = bids;
//     this._bidsObservers.next(this._dataStore.bids);
//   }
//
//   public storeBid(bid: Bid) {
//     this._dataStore.bids.push(bid);
//     this._bidsObservers.next(this._dataStore.bids);
//   }
// }
//# sourceMappingURL=bid.service.js.map