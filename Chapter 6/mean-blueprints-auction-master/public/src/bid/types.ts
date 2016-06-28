import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Bid } from './bid.model';

export type SubjectBid = Subject<Bid>;
export type SubjectBids = Subject<Array<Bid>>;
export type ObservableBid = Observable<Bid>;
export type ObservableBids = Observable<Array<Bid>>;
