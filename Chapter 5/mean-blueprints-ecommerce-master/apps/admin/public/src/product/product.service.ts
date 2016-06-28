import { Injectable } from 'angular2/core';
import { Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from '../auth/index';
import { contentHeaders } from '../common/index';
import { Product } from './product.model';

type ObservableProducts = Observable<Array<Product>>;

@Injectable()
export class ProductService {
  public products: ObservableProducts;

  private _authHttp: AuthHttp;
  private _productsObservers: any;
  private _dataStore: { products: Array<Product> };

  constructor(authHttp: AuthHttp) {
    this._authHttp = authHttp;
    this.products = new Observable(observer => this._productsObservers = observer).share();
    this._dataStore = { products: [] };
  }

  getAll() {
    this._authHttp
    .get('/api/products', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe(products => {
      this._dataStore.products = products;
      this._productsObservers.next(this._dataStore.products);
    }, err => console.error(err));
  }
}
