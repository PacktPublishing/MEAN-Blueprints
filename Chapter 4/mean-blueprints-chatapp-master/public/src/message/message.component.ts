import { Component, AfterViewInit } from 'angular2/core';

@Component({
    inputs: ['message'],
    selector: 'message',
    template: `
      <div class="message-item">
        <div class="message-identifier">
          <img src="{{message.sender.avatar}}" widht="36" height="36"/>
        </div>
        <div class="message-content">
          <div class="message-sender">
            <span class="user-name">{{message.sender.name}}</span>
            <span class="message-timestamp" title={{message.fulltime}}>{{message.time}}</span>
          </div>
          <div class="message-body">
            {{message.body}}
          </div>
        </div>
      </div>
    `
})
export class MessageComponent implements AfterViewInit {
  constructor() {
  }

  ngAfterViewInit() {
    var ml = document.querySelector('message-list .message-list');
    ml.scrollTop = ml.scrollHeight;
  }
}
