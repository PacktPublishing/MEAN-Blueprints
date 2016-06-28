import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { ThreadService } from './thread.service';
import { contentHeaders } from '../common/headers';
import { Message } from '../datatypes/message';
import { User } from '../datatypes/user';
import * as io from 'socket.io-client';

type ObservableMessages = Observable<Array<Message>>;

@Injectable()
export class MessageService {
  public messages: ObservableMessages;

  private _http: Http;
  private _threadService: ThreadService;
  private _io: any;
  private _messagesObservers: any;
  private _dataStore: { messages: Array<Message> };

  constructor(http: Http, threadService: ThreadService) {
    this._io = io.connect();
    this._http = http;
    this._threadService = threadService;
    this.messages = new Observable(observer => this._messagesObservers = observer).share();
    this._dataStore = { messages: [] };
    this._socketOn();
  }

  getByThread(threadId) {
    this._http
    .get('/api/threads/'+threadId+'/messages', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map(res => {
      return res.map(data => {
        let sender = new User(
          data.sender._id,
          data.sender.email,
          data.sender.name,
          data.sender.createdAt
        );
        return new Message(
          data._id,
          sender,
          data.thread,
          data.body,
          data.createdAt
        );
      });
    })
    .subscribe(messages => {
      this._dataStore.messages = messages;
      this._messagesObservers.next(this._dataStore.messages);
    });
  }

  sendMessage(message: Message) {
    this._io.emit('send:im', message);
  }

  private _socketOn() {
    this._io.on('receive:im', message => this._storeMessage(message));
    this._io.on('send:im:success', message => this._storeMessage(message));
  }

  private _storeMessage(message: Message) {
    let sender = new User(
      message.sender._id,
      message.sender.email,
      message.sender.name,
      message.sender.createdAt
    );
    let m = new Message(
      message._id,
      new User(sender._id, sender.email, sender.name, sender.createdAt),
      message.thread,
      message.body,
      message.createdAt
    );
    this._dataStore.messages.push(m);
    this._messagesObservers.next(this._dataStore.messages);
  }
}
