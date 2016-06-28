import { Component, OnInit } from 'angular2/core';
import { ThreadService } from '../services/thread.service';
import { MessageService } from '../services/message.service';
import { Message } from '../datatypes/message';
import { User } from '../datatypes/user';
import { Thread } from '../datatypes/thread';

@Component({
    selector: 'message-form',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <input
        class="message-form form-control"
        autocorrect="off" autocomplete="off" spellcheck="true"
        (keydown.enter)="onEnter($event)"
        [(ngModel)]="draftMessage.body"
      >
    `
})
export class MessageFormComponent implements OnInit {
  public draftMessage: Message;
  private _messageService: MessageService;
  private _threadService: ThreadService;
  private _thread: Thread;

  constructor(messageService: MessageService, threadService: ThreadService) {
    this._messageService = messageService;
    this._threadService = threadService;
    this._threadService.currentThread.subscribe(thread => this._thread = thread);
  }

  ngOnInit() {
    this.draftMessage = new Message();
  }

  onEnter(event: any) {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage() {
    let message: Message = this.draftMessage;
    message.thread = this._thread._id;
    this._messageService.sendMessage(message);
    this.draftMessage = new Message();
  }
}
