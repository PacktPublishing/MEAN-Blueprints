import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Router } from 'angular2/router';
import { ChatComponent } from './chat/chat.component';

@RouteConfig([
  { path: '/messages/...', as: 'Chat', component: ChatComponent, useAsDefault: true }
])
@Component({
    selector: 'chat-app',
    directives: [
      RouterOutlet
    ],
    template: `
      <div class="chat-wrapper row card whiteframe-z2">
        <div class="chat-header col">
          <h3>Chat application</h3>
        </div>
        <router-outlet></router-outlet>
      </div>
    `
})
export class AppComponent {
  constructor() {
  }
}
