import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { AuthHttp } from '../auth/index';
import { contentHeaders, serializeQuery } from '../common/index';
import { Job } from './job.model';

@Injectable()
export class JobService {
  private _http: Http;
  private _authHttp: AuthHttp;

  constructor(http: Http, authHttp: AuthHttp) {
    this._http = http;
    this._authHttp = authHttp;
  }

  getAll(criteria) {
    let query = '';
    let str = serializeQuery(criteria);

    if (str) {
      query = `?${str}`;
    }

    return this._http
    .get(`/api/jobs${query}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  findById(id) {
    return this._http
    .get(`/api/jobs/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  create(job) {
    let body = JSON.stringify(job);

    return this._authHttp
    .post('/api/jobs', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
