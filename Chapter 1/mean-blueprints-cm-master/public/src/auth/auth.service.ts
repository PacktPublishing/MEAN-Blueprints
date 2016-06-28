import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { contentHeaders } from '../common/headers';

@Injectable()
export class AuthService {
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  public signin(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('/auth/signin', body, { headers: contentHeaders })
    .map((res: Response) => res.json());
  }

  public register(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('/auth/register', body, { headers: contentHeaders })
    .map((res: Response) => res.json());
  }

  private _serialize(data) {
    return JSON.stringify(data);
  }
}
