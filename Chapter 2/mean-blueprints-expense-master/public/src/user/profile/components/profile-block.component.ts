import { Component, OnInit } from 'angular2/core';
import { ProfileService } from '../profile.service';
import { Block } from '../block.model';
import { Entry } from '../entry.model';

@Component({
    selector: 'profile-block',
    inputs: ['block'],
    template: `
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{block.title}}</h3>
        </div>
        <div class="panel-body">
          <div class="profile-block-entries">
            <div *ngFor="#entry of block.data">
              <div class="form-group">
                <label>Title</label>
                <input class="form-control" type="text"
                  (keydown.enter)="onEnter($event)"
                  [(ngModel)]="entry.title">
              </div>
              <div class="form-group">
                <label>Sub title</label>
                <input class="form-control" type="text"
                  (keydown.enter)="onEnter($event)"
                  [(ngModel)]="entry.subTitle">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control"
                  (keydown.enter)="onEnter($event)"
                  [(ngModel)]="entry.description"></textarea>
              </div>
              <hr>
            </div>
          </div>
          <button class="btn btn-default btn-xs btn-block" (click)="addEntry($event)">
            <i class="glyphicon glyphicon-plus"></i> Add new entry
          </button>
        </div>
      </div>
    `
})
export class ProfileBlockComponent implements OnInit {
  public block: any;
  private _profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this._profileService = profileService;
  }

  ngOnInit() {
    console.log(this.block);
  }

  addEntry(event) {
    event.preventDefault();
    this.block.data.push(new Entry());
  }

  onEnter(event) {
    event.preventDefault();
    this._profileService.updateProfileBlock(this.block);
  }
}
