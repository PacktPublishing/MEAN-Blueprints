import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'contact-create',
    directives: [RouterLink],
    templateUrl: 'src/contact/components/contact-form.html'
})
export class ContactCreateComponent implements OnInit {
  public contact: Contact;
  private _router: Router;
  private _contactService: ContactService;

  constructor(
    contactService: ContactService,
    router: Router
  ) {
    this._contactService = contactService;
    this._router = router;
  }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSubmit(event) {
    event.preventDefault();

    this._contactService
    .create(this.contact)
    .subscribe((contact) => {
      this._router.navigate(['ContactList']);
    }, err => console.error(err));
  }
}
