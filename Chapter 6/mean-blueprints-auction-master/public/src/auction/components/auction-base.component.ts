import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuctionListComponent } from './auction-list.component';
import { AuctionDetailComponent } from './auction-detail.component';

@RouteConfig([
  { path: '/', as: 'AuctionList', component: AuctionListComponent, useAsDefault: true },
  { path: '/:identifier', as: 'AuctionDetail', component: AuctionDetailComponent }
])
@Component({
    selector: 'auction-base',
    directives: [
      AuctionListComponent,
      AuctionDetailComponent,
      RouterOutlet
    ],
    template: `
      <div class="col">
        <router-outlet></router-outlet>
      </div>
    `
})
export class AuctionBaseComponent {
  constructor() {}
}
