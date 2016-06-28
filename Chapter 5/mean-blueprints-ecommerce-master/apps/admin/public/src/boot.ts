import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AuthHttp, AuthService }  from './auth/index';
import { ProductService }  from './product/index';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

bootstrap(AppComponent, [
  HTTP_PROVIDERS, ROUTER_PROVIDERS,
  AuthHttp,
  AuthService,
  ProductService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
