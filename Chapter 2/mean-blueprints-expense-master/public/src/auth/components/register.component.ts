import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'register',
    directives: [
      RouterLink
    ],
    template: `
      <div class="login jumbotron center-block">
        <h1>Register</h1>
        <form role="form" (submit)="register($event, name.value, email.value, password.value)">
          <div class="form-group">
            <label for="name">Full name</label>
            <input type="text" #name class="form-control" id="email" placeholder="please enter your name">
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" #email class="form-control" id="email" placeholder="enter valid e-mail">
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
export class RegisterComponent {
  private _authService: AuthService;
  private _router: Router;

  constructor(authService: AuthService, router: Router) {
    this._router = router;
    this._authService = authService;
  }

  register(event, name, email, password) {
    event.preventDefault();

    let data = { name, email, password };

    this._authService
    .register(data)
    .subscribe((user) => {
      this._router.navigateByUrl('/');
    });
  }
}
