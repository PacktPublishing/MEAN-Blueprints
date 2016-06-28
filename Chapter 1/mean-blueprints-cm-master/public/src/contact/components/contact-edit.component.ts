import { Component, OnInit } from 'angular2/core';
import { RouteParams, RouterLink } from 'angular2/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'contact-edit',
    directives: [RouterLink],
    templateUrl: 'src/contact/components/contact-form.html'
})
export class ContactEditComponent implements OnInit {
  public contact: Contact;
  private _contactService: ContactService;
  private _routeParams: RouteParams;

  constructor(
    contactService: ContactService,
    routerParams: RouteParams
  ) {
    this._contactService = contactService;
    this._routeParams = routerParams;
  }

  ngOnInit() {
    const id: string = this._routeParams.get('id');
    this.contact = new Contact();
    this._contactService
    .contact.subscribe((contact) => {
      this.contact = contact;
    });
    this._contactService.getOne(id);
  }

  onSubmit(event) {
    event.preventDefault();

    this._contactService
    .update(this.contact)
    .subscribe((contact) => {
      this.contact = contact;
    }, err => console.error(err));
  }
}
