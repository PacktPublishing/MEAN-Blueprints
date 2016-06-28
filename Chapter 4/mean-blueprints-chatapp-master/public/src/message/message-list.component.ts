import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { MessageService } from '../services/message.service';
import { ThreadService } from '../services/thread.service';
import { Thread } from '../datatypes/thread';
import { Message } from '../datatypes/message';
import { MessageComponent } from './message.component';

@Component({
    selector: 'message-list',
    directives: [MessageComponent],
    template: `
      <div class="message-list">
        <div *ngIf="messages.length === 0" class="empty-message-list">
          <h3>No messages so far :)</h3>
        </div>
        <message
          *ngFor="#message of messages"
          [message]="message"
          ></message>
      </div>
    `
})
export class MessageListComponent {
  public messages: Array<Message> = [];
  private _messageService: MessageService;
  private _threadService: ThreadService;
  private _routeParams:RouteParams;

  constructor(
    messageService: MessageService,
    threadService: ThreadService,
    routeParams: RouteParams
  ) {
    this._routeParams = routeParams;
    this._messageService = messageService;
    this._threadService = threadService;
    this._messageService.messages.subscribe(messages => this.messages = messages);
    let threadId: string = this._routeParams.get('identifier');
    this._threadService.setCurrentThread(new Thread(threadId));
    this._messageService.getByThread(threadId);
  }
}
