import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { AuthHttp } from '../auth/index';
import { contentHeaders } from '../common/index';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
  private _http: Http;
  private _authHttp: AuthHttp;

  constructor(http: Http, authHttp: AuthHttp) {
    this._http = http;
    this._authHttp = authHttp;
  }

  getAll() {
    return this._http
    .get('/api/companies', { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  findById(id) {
    return this._http
    .get(`/api/companies/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  create(company) {
    let body = JSON.stringify(company);

    return this._authHttp
    .post('/api/companies', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  update(company) {
    let body = JSON.stringify(company);

    return this._authHttp
    .put(`/api/companies/${company._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
