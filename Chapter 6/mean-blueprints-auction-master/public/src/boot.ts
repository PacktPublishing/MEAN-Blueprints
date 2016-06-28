import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AppComponent } from './app.component';
import { AuthHttp, AuthService }  from './auth/index';
import { AuctionService }  from './auction/index';
// import { BidderService }  from './services/bidder.service';
import { BidService } from './bid/index';
import { SocketService }  from './common/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  AuthHttp,
  AuthService,
  SocketService,
  AuctionService,
  // BidderService,
  BidService
]);
