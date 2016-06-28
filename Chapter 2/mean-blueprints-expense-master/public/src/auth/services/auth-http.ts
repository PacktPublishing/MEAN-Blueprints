import { Injectable } from 'angular2/core';
import { Http, Response, Headers, BaseRequestOptions, Request, RequestOptions, RequestOptionsArgs, RequestMethod } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';

@Injectable()
export class AuthHttp {
  public unauthorized: Subject<Response>;
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
    this.unauthorized = new BehaviorSubject<Response>(null);
  }

  private request(requestArgs: RequestOptionsArgs, additionalArgs?: RequestOptionsArgs) {
    let opts = new RequestOptions(requestArgs);

    if (additionalArgs) {
      opts = opts.merge(additionalArgs);
    }

    let req:Request = new Request(opts);

    if (!req.headers) {
      req.headers = new Headers();
    }

    if (!req.headers.has('Authorization')) {
      req.headers.append('Authorization', `Bearer ${this.getToken()}`);
    }

    return this._http.request(req).catch((err: any) => {
      if (err.status === 401) {
        this.unauthorized.next(err);
      }

      return Observable.throw(err);
    });
  }

  private getToken() {
    return localStorage.getItem('token');
  }

  public get(url: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Get}, opts);
  }

  public post(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Post, body: body}, opts);
  }

  public put(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Put, body: body}, opts);
  }

  public delete(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Delete, body: body}, opts);
  }

  // rest of the HTTP methods ...
}
