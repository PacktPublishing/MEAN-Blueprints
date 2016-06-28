import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
// import { ThreadService } from './thread.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';

@Injectable()
export class ChatService {
  public contactsMap: Object;
  // public currentUser: Subject<User> = new BehaviorSubject<User>(new User());

  private _http: Http;
  // private _threadService: ThreadService;

  constructor(http: Http) {
    this._http = http;
    // this._threadService = threadService;
    this.contactsMap = {};
    // this.start().map(res => {
    //   let threads: Array<Thread> = [];
    //
    //   res.threads.forEach(thread => {
    //     let names = [];
    //     let threadName = '';
    //
    //     thread.participants.map(participant => {
    //       let user = new User(participant._id, participant.email, participant.name);
    //
    //       this.contactsMap[participant._id] = user;
    //
    //       if (res.self !== user._id) {
    //         names.push(user.name);
    //       }
    //     });
    //     threadName = (names[1]) ? names.join(', ') : names[0];
    //     threads.push(new Thread(thread._id, threadName, thread.participants, thread.createdAt));
    //   });
    //   res.threads = threads;
    //
    //   return res;
    // }).subscribe(data => {
    //   this.currentUser.next(new User(data.self));
    //   this._threadService.storeThreads(data.threads);
    // });
  }

  start() {
    return this._http
    .post('/api/chat/start', '{}')
    .map((res: Response) => res.json());
  }
}
