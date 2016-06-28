import { Component, OnInit, OnDestroy } from 'angular2/core';
import { BidService } from '../bid.service';
import { Bid } from '../bid.model';
import { BidComponent } from './bid.component';

@Component({
    selector: 'bid-list',
    inputs: ['bids'],
    directives: [BidComponent],
    template: `
      <div class="bid-list">
        <div *ngIf="bids.length === 0" class="empty-bid-list">
          <h3>No bids so far :)</h3>
        </div>
        <bid *ngFor="#bid of bids" [bid]="bid"></bid>
      </div>
    `
})
export class BidListComponent implements OnInit, OnDestroy {
  public bids: Array<Bid>;
  private _bidService: BidService;
  private _subscription: any;

  constructor(bidService: BidService) {
    this._bidService = bidService;
  }

  ngOnInit() {
    this._subscription = this._bidService.bid.subscribe((bid) => {
      this.bids.push(bid);
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
        this._subscription.unsubscribe();
    }
  }
}
