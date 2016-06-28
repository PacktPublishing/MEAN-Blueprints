import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Auction } from '../auction/index';
import { Bid } from '../bid/index';
import { Bidder } from '../bidder/index';

export type SubjectAuction = Subject<Auction>;
export type ObservableAuction = Observable<Auction>;
export type ObservableAuctions = Observable<Array<Auction>>;

export type SubjectBid = Subject<Bid>;
export type ObservableBid = Observable<Bid>;
export type ObservableBids = Observable<Array<Bid>>;

export type SubjectBidder = Subject<Bidder>;
export type ObservableBidder = Observable<Bidder>;
export type ObservableBidders = Observable<Array<Bidder>>;
