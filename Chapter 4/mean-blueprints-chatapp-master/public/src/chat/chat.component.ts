import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { ChatService } from '../services/chat.service';
import { ThreadListComponent } from '../thread/thread-list.component';
import { MessageListComponent } from '../message/message-list.component';
import { MessageFormComponent } from '../message/message-form.component';
import { UserListComponent } from '../user/user-list.component';
import { ChatHelpComponent } from './chat-help.component';

@RouteConfig([
  { path: '/',            as: 'ThreadMessagesDefault', component: ChatHelpComponent, useAsDefault: true },
  { path: '/:identifier', as: 'ThreadMessages', component: MessageListComponent }
])
@Component({
  selector: 'chat',
  directives: [
    ThreadListComponent,
    MessageFormComponent,
    UserListComponent,
    RouterOutlet
  ],
  template: `
    <div class="threads-container col sidebar">
      <user-list></user-list>
      <thread-list></thread-list>
    </div>

    <div class="messages-container col content">
      <router-outlet></router-outlet>

      <div class="message-form-container">
        <message-form></message-form>
      </div>
    </div>
  `
})
export class ChatComponent {
  private _chatService: ChatService;

  constructor(chatService: ChatService) {
    this._chatService = chatService;
  }
}
