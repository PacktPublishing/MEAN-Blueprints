import { Component, OnInit, OnDestroy } from 'angular2/core';
import { AuctionService } from '../auction.service';
import { RouterLink, RouteParams } from 'angular2/router';
import { Auction } from '../auction.model';
import { BidListComponent } from '../../bid/index';
// import { BidFormComponent } from '../../bid/index';

@Component({
    selector: 'auction-detail',
    directives: [
      BidListComponent,
      RouterLink
    ],
    template: `
      <div class="col">
        <a href="#" [routerLink]="['AuctionList']">back to auctions</a>
      </div>
      <div class="row">
        <div class="col sidebar">
          <div class="auction-details">
            <h2>{{ auction.item.title }}</h2>
            <p>{{ auction.startingPrice.display }} {{ auction.startingPrice.currency }}</p>
            <p>{{ auction.currentPrice.dislpay }} {{ auction.startingPrice.currency }}</p>
            <p>minimal bid amount: {{ auction.minAmount.display }}</p>
          </div>
        </div>
        <div class="col content">
          <bid-list [bids]="auction.bids" [auctionId]="auction._id"></bid-list>
        </div>
      </div>
    `
})
export class AuctionDetailComponent implements OnInit, OnDestroy {
  public auction: Auction;
  private _routeParams:RouteParams;
  private _auctionService: AuctionService;

  constructor(
    auctionService: AuctionService,
    routeParams: RouteParams
  ) {
    this._auctionService = auctionService;
    this._routeParams = routeParams;
  }

  ngOnInit() {
    const identifier: string = this._routeParams.get('identifier');
    const auctionId = this.getAuctionId(identifier);

    this.auction = new Auction();
    this._auctionService.auction.subscribe((auction: Auction) => {
      this.auction = auction;
      this._auctionService.setCurrentAuction(auction);
    });
    this._auctionService.getOne(auctionId);
  }

  ngOnDestroy() {
    this._auctionService.setCurrentAuction(new Auction());
  }

  private getAuctionId(identifier: string) {
    const chunks = identifier.split('-');
    return chunks[chunks.length -1];
  }
}
