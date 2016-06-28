import { Component, AfterViewInit } from 'angular2/core';
import { Bid } from '../bid.model';

@Component({
    inputs: ['bid'],
    selector: 'bid',
    template: `
      <div class="bid-item">
        <div class="">
          <span class="">{{bid_id}}</span>
          <span class="">{{bid.amount}}</span>
        </div>
      </div>
    `
})
export class BidComponent implements AfterViewInit {
  public bid: Bid;

  constructor() {}

  ngAfterViewInit() {
    var ml = document.querySelector('bid-list .bid-list');
    ml.scrollTop = ml.scrollHeight;
  }
}
