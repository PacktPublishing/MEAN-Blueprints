import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { Thread } from '../datatypes/thread';
import { User } from '../datatypes/user';

type ObservableThreads = Observable<Array<Thread>>;
type SubjectThread = Subject<Thread>;

@Injectable()
export class ThreadService {
  public threads: ObservableThreads;
  public currentThread: SubjectThread = new BehaviorSubject<Thread>(new Thread());
  private _http: Http;
  private _threadObservers: any;
  private _dataStore: { threads: Array<Thread> };
  private _currentUser: any;

  constructor(http: Http) {
    this._http = http;
    this._dataStore = { threads: [] };
    this.threads = new Observable(
      observer => this._threadObservers = observer
    ).share();
  }

  open(data: any) {
    return this._http
    .post('/api/thread/open', JSON.stringify(data), { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map(data => {
      return new Thread(data._id, data.name, data.participants, data.createdAt);
    });
  }

  getAll() {
    return this._http
    .get('/api/threads', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map(data => {
      return data.map(thread => {
        return new Thread(thread._id, thread._id, thread.participants, thread.createdAt)
      });
    })
    .subscribe(threads => this.storeThreads(threads));
    // .subscribe(threads => {
    //   // this._dataStore.threads = threads;
    //   // this._threadObservers.next(this._dataStore.threads);
    // });
    // .map(data => {
    //   let threads: Array<Thread> = [];
    //   threads = data.map(thread => {
    //     let names = [];
    //     let threadName = '';
    //     thread.participants.map(participant => {
    //
    //       if (this._dataStore.currentUser._id !== participant._id) {
    //         names.push(participant.name);
    //       }
    //     });
    //     threadName = (names[1]) ? names.join(', ') : names[0];
    //     return new Thread(thread._id, thread.name || threadName, thread.participants, thread.createdAt);
    //   });
    //
    //   return threads;
    // })
  }

  setCurrentThread(newThread: Thread) {
    this.currentThread.next(newThread);
  }

  storeThread(thread: Thread) {
    var found = this._dataStore.threads.find(t => {
      return t._id === thread._id;
    });

    if (!found) {
      this._dataStore.threads.push(thread);
      this._threadObservers.next(this._dataStore.threads);
    }
  }

  storeThreads(threads: Array<Thread>) {
    this._dataStore.threads = threads;
    this._threadObservers.next(this._dataStore.threads);
  }
}
