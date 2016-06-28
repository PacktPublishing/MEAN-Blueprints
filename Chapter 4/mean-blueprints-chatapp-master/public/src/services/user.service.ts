import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { User } from '../datatypes/user';

type ObservableUsers = Observable<Array<User>>;

@Injectable()
export class UserService {
  public users: ObservableUsers;
  public user: User;
  private _http: Http;
  private _userObservers: any;
  private _dataStore: { users: Array<User> };

  constructor(http: Http) {
    this._http = http;
    this.users = new Observable(observer => this._userObservers = observer).share();
    this._dataStore = { users: [] };
    this.getAll();
  }

  getAll() {
    return this._http
    .get('/api/users', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe(users => this.storeUsers(users));
  }

  // findById(id: number) {
  //   return this._http
  //   .get('/api/users/'+id, { headers: contentHeaders })
  //   .map((res: Response) => res.json());
  // }

  storeUsers(users: Array<User>) {
    this._dataStore.users = users;
    this._userObservers.next(this._dataStore.users);
  }
}
