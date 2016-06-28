import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../../common/index';
import { AuthHttp } from '../../auth/index';
import { Block } from './block.model';

@Injectable()
export class ProfileService {
  public user: Subject<any> = new BehaviorSubject<any>({});
  public profile: Subject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  private _http: Http;
  private _authHttp: AuthHttp;
  private _dataStore: { profile: Array<Block> };

  constructor(http: Http, authHttp: AuthHttp) {
    this._http = http;
    this._authHttp = authHttp;
    this._dataStore = { profile: [] };
    this.profile.subscribe((profile) => {
      this._dataStore.profile = profile;
    });
  }

  public getProfile() {
    this._authHttp
    .get('/api/profile', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((user: any) => {
      this.user.next(user);
      this.profile.next(user.profile);
    });
  }

  public createProfileBlock(block) {
    let body = JSON.stringify(block);

    this._authHttp
    .post('/api/profile/blocks', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((block: any) => {
      this._dataStore.profile.push(block);
      this.profile.next(this._dataStore.profile);
    }, err => console.error(err));
  }

  public updateProfileBlock(block) {
    if (!block._id) {
      this.createProfileBlock(block);
    } else {
      let body = JSON.stringify(block);

      this._authHttp
      .put(`/api/profile/blocks/${block._id}`, body, { headers: contentHeaders })
      .map((res: Response) => res.json())
      .subscribe((block: any) => {
        this.updateLocalBlock(block);
      }, err => console.error(err));
    }
  }

  private updateLocalBlock(data) {
    this._dataStore.profile.forEach((block) => {
      if (block._id === data._id) {
        block = data;
      }
    });

    this.profile.next(this._dataStore.profile);
  }
}
