import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'contact-list',
    directives: [RouterLink],
    template: `
      <div class="row">
        <h4>
          Total contacts: <span class="muted">({{contacts.length}})</span>
          <a href="#" [routerLink]="['ContactCreate']">add new</a>
        </h4>
        <div class="contact-list">
          <div class="card-item col col-25 contact-item"
            *ngFor="#contact of contacts">
            <img src="{{ contact.image }}" />
            <h3>
              <a href="#" [routerLink]="['ContactEdit', { id: contact._id }]">
                {{ contact.name }}
              </a>
            </h3>
            <p>
              <span>{{ contact.city }}</span>
              <span>·</span>
              <span>{{ contact.company }}</span>
            </p>
            <p><span>{{ contact.email }}</span></p>
            <p><span>{{ contact.phoneNumber }}</span></p>
          </div>
        </div>
      </div>
    `
})
export class ContactListComponent implements OnInit {
  public contacts: Array<Contact> = [];
  private _contactService: ContactService;

  constructor(contactService: ContactService) {
    this._contactService = contactService;
  }

  ngOnInit() {
    this._contactService.contacts.subscribe(contacts => {
      this.contacts = contacts;
    });
    this._contactService.getAll();
  }
}
