import { Component, OnInit } from 'angular2/core';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'block-entry',
    directives: [],
    inputs: ['entry', 'blockId'],
    template: `
      <form name="entryForm">
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
      </form>
    `
})
export class BlockEntryComponent implements OnInit {
  public blockId: string;
  public entry: any;
  private _profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this._profileService = profileService;
  }

  ngOnInit() {
  }

  onEnter(event: any) {
    event.preventDefault();
    this.saveEntry();
  }

  saveEntry() {
    console.log('saving entry', this.entry, this.blockId);
    // this._profileService.saveBlock(this.blockId);
  }
}
