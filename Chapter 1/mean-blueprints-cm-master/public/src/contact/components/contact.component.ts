import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { ContactListComponent } from './contact-list.component';
import { ContactCreateComponent } from './contact-create.component';
import { ContactEditComponent } from './contact-edit.component';

@RouteConfig([
  { path: '/', as: 'ContactList', component: ContactListComponent, useAsDefault: true },
  { path: '/:id', as: 'ContactEdit', component: ContactEditComponent },
  { path: '/create', as: 'ContactCreate', component: ContactCreateComponent }
])
@Component({
    selector: 'contact',
    directives: [
      ContactListComponent,
      RouterOutlet
    ],
    template: `
      <router-outlet></router-outlet>
    `
})
export class ContactComponent {
  constructor() {}
}
