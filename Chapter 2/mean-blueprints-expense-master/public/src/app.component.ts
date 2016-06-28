import { Component, OnInit } from 'angular2/core';
import { RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';
import { Router } from 'angular2/router';
import { AuthHttp, AuthService, SigninComponent, RegisterComponent } from './auth/index';
import { ExpensesComponent } from './expense/index';
import { CategoriesComponent } from './category/index';

@RouteConfig([
  { path: '/', redirectTo: ['/Expenses'], useAsDefault: true },
  { path: '/expenses', as: 'Expenses', component: ExpensesComponent },
  { path: '/categories', as: 'Categories', component: CategoriesComponent },
  { path: '/signin', as: 'Signin', component: SigninComponent },
  { path: '/register', as: 'Register', component: RegisterComponent }
])
@Component({
    selector: 'expense-tracker',
    directives: [
      RouterOutlet,
      RouterLink
    ],
    template: `
      <div class="app-wrapper card whiteframe-z2">
        <div class="row">
          <div class="col">
            <a href="#">Expense tracker</a>
            <a href="#" [routerLink]="['Expenses']">Expenses</a>
            <a href="#" [routerLink]="['Categories']">Categories</a>
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
