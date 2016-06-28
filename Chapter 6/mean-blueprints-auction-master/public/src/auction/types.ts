import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Auction } from './auction.model';

export type SubjectAuction = Subject<Auction>;
export type ObservableAuction = Observable<Auction>;
export type ObservableAuctions = Observable<Array<Auction>>;
