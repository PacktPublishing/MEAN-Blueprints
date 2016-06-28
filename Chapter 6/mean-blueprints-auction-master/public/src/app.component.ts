import { Component, OnInit } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Router } from 'angular2/router';
import { AuthHttp, AuthService, SigninComponent, RegisterComponent } from './auth/index';
import { AuctionBaseComponent } from './auction/index';

@RouteConfig([
  { path: '/auctions/...', as: 'AuctionsRoot', component: AuctionBaseComponent, useAsDefault: true },
  { path: '/signin', as: 'Signin', component: SigninComponent },
  { path: '/register', as: 'Register', component: RegisterComponent }
])
@Component({
    selector: 'auction-app',
    directives: [
      SigninComponent,
      RegisterComponent,
      RouterOutlet
    ],
    template: `
      <div class="app-wrapper col card whiteframe-z2">
      <div class="row">
        <div class="col">
          <a href="#">auction application</a>
        </div>
      </div>
        <div class="row">
          <router-outlet></router-outlet>
        </div>
      </div>
    `
})
export class AppComponent implements OnInit {
  public currentUser: any;
  private _router: Router;
  private _authHttp: AuthHttp;
  private _authSerivce: AuthService;

  constructor(authHttp: AuthHttp, authSerice: AuthService, router: Router) {
    this._router = router;
    this._authHttp = authHttp;
    this._authSerivce = authSerice;
  }

  ngOnInit() {
    this.currentUser = {};
    this._authHttp.unauthorized.subscribe((res) => {
      if (res) {
        this._router.navigate(['./Signin']);
      }
    });
    // this._authSerivce.currentUser.subscribe((user) => {
    //   this._router.navigate(['./AuctionsRoot']);
    //   this.currentUser = user;
    // });
  }
}
