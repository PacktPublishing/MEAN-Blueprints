import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AuthHttp } from './auth/auth-http';
import { AuthService } from './auth/auth.service';
import { ContactService } from './contact/contact.service';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AuthService,
  AuthHttp,
  ContactService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
