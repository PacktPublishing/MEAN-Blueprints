import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Bidder } from './bidder.model';

export type SubjectBidder = Subject<Bidder>;
export type ObservableBidder = Observable<Bidder>;
export type ObservableBidders = Observable<Array<Bidder>>;
