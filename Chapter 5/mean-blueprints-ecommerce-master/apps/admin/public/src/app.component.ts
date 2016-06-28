import { Component, OnInit } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Router } from 'angular2/router';
import { AuthHttp, AuthService, SigninComponent } from './auth/index';
import { ProductComponent } from './product/index';

@RouteConfig([
  { path: '/products/...', as: 'Products', component: ProductComponent, useAsDefault: true },
  { path: '/signin', as: 'Signin', component: SigninComponent }
])
@Component({
    selector: 'admin-app',
    directives: [
      RouterOutlet
    ],
    template: `
      <div class="app-wrapper card whiteframe-z2">
        <div class="row">
          <div class="col">
            <a href="#">ecommerce - admin</a>
            <span class="pull-right">{{currentUser.email}}</span>
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
  private _authHttp: AuthHttp;
  private _authSerivce: AuthService;
  private _router: Router;

  constructor(authHttp: AuthHttp, authSerice: AuthService, router: Router) {
    this._router = router;
    this._authSerivce = authSerice;
    this._authHttp = authHttp;
  }

  ngOnInit() {
    // this.currentUser = {};
    this._authHttp.unauthorized.subscribe((res) => {
      if (res) {
        this._router.navigate(['./Signin']);
      }
    });
    this._authSerivce.currentUser.subscribe((user) => {
      this._router.navigate(['./Products']);
      this.currentUser = user;
    });
  }
}
