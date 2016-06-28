import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Router } from 'angular2/router';
import { AuthHttp } from './auth/auth-http';
import { Signin } from './auth/signin';
import { Register } from './auth/register';
import { ContactComponent } from './contact/components/contact.component';

@RouteConfig([
  { path: '/signin', as: 'Signin', component: Signin },
  { path: '/register', as: 'Register', component: Register },
  { path: '/contacts/...', as: 'Contacts', component: ContactComponent, useAsDefault: true }
])
@Component({
    selector: 'cm-app',
    directives: [
      Signin,
      Register,
      ContactComponent,
      RouterOutlet
    ],
    template: `
      <div class="app-wrapper col card whiteframe-z2">
        <div class="row">
          <h3>Contact manager</h3>
        </div>
        <router-outlet></router-outlet>
      </div>
    `
})
export class AppComponent {
  private _authHttp: AuthHttp;
  private _router: Router;

  constructor(authHttp: AuthHttp, router: Router) {
    this._authHttp = authHttp;
    this._router = router;
    this._authHttp.unauthorized.subscribe((res) => {
      if (res) {
        this._router.navigate(['./Signin']);
      }
    });
  }
}
