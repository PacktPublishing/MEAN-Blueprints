import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import { ThreadService } from '../services/thread.service';
import { Thread } from '../datatypes/thread';

@Component({
    inputs: ['thread'],
    selector: 'thread',
    directives: [ RouterLink ],
    template: `
      <div class="thread-item">
        <a href="#" [routerLink]="['./ThreadMessages', { identifier: thread._id }]" data-id="{{thread._id}}">
          {{thread.name}}
          <span *ngIf="selected"> &bull; </span>
        </a>
      </div>
    `
})
export class ThreadComponent implements OnInit {
  public thread: Thread;
  public selected: boolean = false;
  private _threadService: ThreadService;

  constructor(threadService: ThreadService) {
    this._threadService = threadService;
  }

  ngOnInit() {
    this._threadService.currentThread.subscribe( (thread: Thread) => {
      this.selected = thread && this.thread && (thread._id === this.thread._id);
    });
  }
}
