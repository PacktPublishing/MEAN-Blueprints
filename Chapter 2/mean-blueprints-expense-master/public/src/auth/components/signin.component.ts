import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'signin',
    directives: [
      RouterLink
    ],
    template: `
      <div class="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form" (submit)="signin($event, email.value, password.value)">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" #email class="form-control" id="email" placeholder="enter your e-mail">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" placeholder="now your password">
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
      </div>
    `
})
export class SigninComponent {
  private _authService: AuthService;
  private _router: Router;

  constructor(authService: AuthService, router: Router) {
    this._authService = authService;
    this._router = router;
  }

  signin(event, email, password) {
    event.preventDefault();

    let data = { email, password };

    this._authService
    .signin(data)
    .subscribe((user) => {
      this._authService.setCurrentUser(user);
      this._router.navigateByUrl('/');
    });
  }
}
