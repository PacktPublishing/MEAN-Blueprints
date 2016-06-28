import { Component, OnInit } from 'angular2/core';
import { RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';
import { Router } from 'angular2/router';
import { AuthHttp, AuthService, SigninComponent } from './auth/index';
import { CompanyBaseComponent } from './company/index';
import { JobBaseComponent } from './job/index';
import { ProfileEditComponent } from './user/index';

@RouteConfig([
  { path: '/jobs/...', as: 'Jobs', component: JobBaseComponent, useAsDefault: true },
  { path: '/companies/...', as: 'Companies', component: CompanyBaseComponent },
  { path: '/signin', as: 'Signin', component: SigninComponent },
  { path: '/profile/edit', as: 'ProfileEdit', component: ProfileEditComponent}
])
@Component({
    selector: 'job-board',
    directives: [
      RouterOutlet,
      RouterLink
    ],
    template: `
      <div class="app-wrapper card whiteframe-z2">
        <div class="row">
          <div class="col">
            <a href="#">Job board</a>
            <a href="#" [routerLink]="['Jobs']">Jobs</a>
            <a href="#" [routerLink]="['Companies']">Companies</a>
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
    this.currentUser = {};
    this._authHttp.unauthorized.subscribe((res) => {
      if (res) {
        this._router.navigate(['./Signin']);
      }
    });
    this._authSerivce.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
