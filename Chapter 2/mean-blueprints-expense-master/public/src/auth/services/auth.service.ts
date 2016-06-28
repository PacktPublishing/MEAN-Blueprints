import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { contentHeaders } from '../../common/index';

@Injectable()
export class AuthService {
  public currentUser: Subject<any>;
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
    this._initSession();
  }

  public signin(user: any) {
    let body = this._serialize(user);
    let basic = btoa(`${user.email}:${user.password}`);
    let headers = new Headers(contentHeaders);
    headers.append('Authorization', `Basic ${basic}`)

    return this._http
    .post('/auth/basic', '', { headers: headers })
    .map((res: Response) => res.json());
  }


  public register(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('/api/users', body, { headers: contentHeaders })
    .map((res: Response) => res.json());
  }

  public setCurrentUser(user: any) {
    this.currentUser.next(user);
  }

  private _initSession() {
    let user = this._deserialize(localStorage.getItem('currentUser'));
    this.currentUser = new BehaviorSubject<Response>(user);
    // persist the user to the local storage
    this.currentUser.subscribe((user) => {
      localStorage.setItem('currentUser', this._serialize(user));
      localStorage.setItem('token', user.token.hash || '');
    });
  }

  private _serialize(data) {
    return JSON.stringify(data);
  }

  private _deserialize(str) {
    try {
      return JSON.parse(str);
    } catch(err) {
      console.error(err);
      return null;
    }
  }
}
