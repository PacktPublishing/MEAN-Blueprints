import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AppComponent } from './app.component';
import { ChatService }  from './services/chat.service';
import { ThreadService }  from './services/thread.service';
import { MessageService }  from './services/message.service';
import { UserService } from './services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

bootstrap(AppComponent, [
  HTTP_PROVIDERS, ROUTER_PROVIDERS,
  ChatService,
  ThreadService,
  MessageService,
  UserService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
