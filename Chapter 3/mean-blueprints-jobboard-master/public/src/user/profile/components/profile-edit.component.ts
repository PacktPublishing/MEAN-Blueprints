import { Component, OnInit } from 'angular2/core';
import { ProfileBlockComponent } from './profile-block.component';
import { ProfileService } from '../profile.service';
import { Block } from '../block.model';

@Component({
    selector: 'profile-edit',
    directives: [ProfileBlockComponent],
    template: `
    <section>

      <div class="jumbotron">
        <h2>Hi! {{user.name}}</h2>
        <p class="lead">Your public e-mail is <span>{{user.email}}</span> <br> and this is your profile</p>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="profile-block" *ngFor="#block of profile">
            <profile-block [block]="block"></profile-block>
          </div>
        </div>

        <form class="form-horizontal col-md-12">
          <div class="form-group">
            <div class="col-md-12">
              <input [(ngModel)]="newBlock.title" type="text" class="form-control" placeholder="Block title">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-12">
              <button (click)="onClick($event)" class="button">New block</button>
            </div>
          </div>
        </form>
      </div>

    </section>
    `
})
export class ProfileEditComponent implements OnInit {
  public user: any;
  public profile: any;
  public newBlock: Block;
  private _profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this._profileService = profileService;
  }

  ngOnInit() {
    this.user = {};
    this.newBlock = new Block();
    this._profileService.user.subscribe((user) => {
      this.user = user;
    });
    this._profileService.profile.subscribe((profile) => {
      this.profile = profile;
    });
    this._profileService.getProfile();
  }

  onClick(event) {
    event.preventDefault();
    let profile = this.profile.slice(0);  // clone the profile
    let block = Object.assign({}, this.newBlock); // clone the new block

    profile.push(block);
    this._profileService.profile.next(profile);
    this.newBlock = new Block();
  }
}
