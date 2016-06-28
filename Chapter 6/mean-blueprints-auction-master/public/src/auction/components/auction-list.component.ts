import { Component, OnInit } from 'angular2/core';
import { AuctionService } from '../auction.service';
import { Router, RouterLink } from 'angular2/router';
import { Auction } from '../auction.model';

@Component({
    selector: 'auction-list',
    directives: [RouterLink],
    template: `
      <div class="auction-list row">
        <h2 class="col">Available auctions</h2>
        <div *ngFor="#auction of auctions" class="col col-25">
          <h3>
            <a href="#"
              [routerLink]="['AuctionDetail', { identifier: auction.identifier }]">
              {{ auction.item.title }}
            </a>
          </h3>
          <p>starting price: {{ auction.startingPrice.display }} {{ auction.startingPrice.currency }}</p>
        </div>
      </div>
    `
})
export class AuctionListComponent implements OnInit {
  public auctions: Array<Auction> = [];
  private _auctionService: AuctionService;

  constructor(auctionService: AuctionService) {
    this._auctionService = auctionService;
  }

  ngOnInit() {
    this._auctionService.auctions.subscribe((auctions: Array<Auction>) => {
      console.log(auctions);
      this.auctions = auctions;
    });
    this._auctionService.getAll();
  }
}
