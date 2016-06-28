import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { AuthHttp } from '../auth/index';
import { contentHeaders } from '../common/index';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  public category: Subject<Category>;
  public categories: Observable<Array<Category>>;

  private _authHttp: AuthHttp;
  private _categoriesObserver: any;

  constructor(authHttp: AuthHttp) {
    this._authHttp = authHttp;
    this.categories = new Observable(
      observer => {
        this._categoriesObserver = observer
      }
    ).share();
    this.category = new BehaviorSubject<Category>(null);
  }

  getAll() {
    return this._authHttp
    .get('/api/categories', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((data) => {
      let categories = data.map((category) => {
        return new Category(
          category._id,
          category.name,
          category.description,
          category.owner,
          category.collaborators
        );
      });

      this._categoriesObserver.next(categories);

      return categories;
    });
  }

  findById(id) {
    return this._authHttp
    .get(`/api/categories/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  create(category) {
    let body = JSON.stringify(category);

    return this._authHttp
    .post('/api/categories', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  update(category) {
    let body = JSON.stringify(category);

    return this._authHttp
    .put(`/api/categories/${category._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  delete(category) {
    return this._authHttp
    .put(`/api/categories/${category._id}`, '', { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
