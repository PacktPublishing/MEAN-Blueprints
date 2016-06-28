import { Component, OnInit } from 'angular2/core';
import { BidService } from '../bid.service';
import { Bid } from '../bid.model';

@Component({
    selector: 'bid-form',
    template: `
      <input
        class="message-form form-control"
        autocorrect="off" autocomplete="off" spellcheck="true"
        (keydown.enter)="onEnter($event)"
        [(ngModel)]="newBid.amount"
      >
    `
})
export class MessageFormComponent implements OnInit {
  public newBid: Bid;
  private _bidService: BidService;

  constructor(bidService: BidService) {
    this._bidService = bidService;
  }

  ngOnInit() {
    // this._threadService.currentThread.subscribe(thread => this._thread = thread);
    this.newBid = new Bid();
  }

  onEnter(event: any) {
    event.preventDefault();
    this.sendMessage();
  }

  sendMessage() {
    let bid: Bid = Object.assign({}, this.newBid);
    // message.thread = this._thread._id;
    this._bidService.placeBid('<auction_id_here>', bid);
    // this.newBid = new Bid();
  }
}
