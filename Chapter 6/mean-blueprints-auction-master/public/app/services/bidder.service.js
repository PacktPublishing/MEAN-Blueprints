// import { Injectable } from 'angular2/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
// import { contentHeaders } from '../common/headers';
// import { SocketService } from './socket.service';
// import { Bidder } from '../datatypes/bidder';
// import { ObservableBidders } from '../datatypes/custom-types';
//
// @Injectable()
// export class BidderService {
//   public bidders: ObservableBidders;
//
//   private _socketService: SocketService;
//   private _biddersObservers: any;
//   private _dataStore: { bidders: Array<Bidder> };
//
//   constructor(socketService: SocketService) {
//     this._socketService = socketService;
//     this._dataStore = { bidders: [] };
//     this.bidders = new Observable(observer => {
//       this._biddersObservers = observer;
//     }).share();
//     this._socketService.bidder.subscribe(bidder => {
//       this.storeBidder(bidder);
//     });
//   }
//
//   public storeBidders(bidders: Array<Bidder>) {
//     // make a copy of the bidders and store them
//     this._dataStore.bidders = bidders.slice(0);
//     this._biddersObservers.next(this._dataStore.bidders);
//   }
//
//   public storeBidder(bidder: Bidder) {
//     this._dataStore.bidders.push(bidder);
//     this._biddersObservers.next(this._dataStore.bidders);
//   }
//
//   public removeBidder(id: string) {
//     let bidders = this._dataStore.bidders;
//
//     bidders.map((bidder, index) => {
//       if (bidder._id === id) {
//         this._dataStore.bidders.splice(index, 1);
//       }
//     });
//
//     this._biddersObservers.next(this._dataStore.bidders);
//   }
// }
//# sourceMappingURL=bidder.service.js.map