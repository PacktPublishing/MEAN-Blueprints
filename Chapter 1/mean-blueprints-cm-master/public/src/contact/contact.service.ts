import { Injectable } from 'angular2/core';
import { Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { AuthHttp } from '../auth/auth-http';
import { Contact } from './contact';

type ObservableContacts = Observable<Array<Contact>>;
type ObservableContact = Observable<Contact>;

const DEFAULT_URL = '/api/contacts';

@Injectable()
export class ContactService {
  public contact: ObservableContact;
  public contacts: ObservableContacts;

  private _authHttp: AuthHttp;
  private _dataStore: { contacts: Array<Contact>, contact: Contact };
  private _contactsObserver: any;
  private _contactObserver: any;
  private _url: string;

  constructor(authHttp: AuthHttp) {
    this._authHttp = authHttp;
    this._url = DEFAULT_URL;
    this._dataStore = { contacts: [], contact: new Contact() };
    this.contacts = new Observable(
      observer => this._contactsObserver = observer
    ).share();
    this.contact = new Observable(
      observer => this._contactObserver = observer
    ).share();
  }

  public getAll() {
    return this._authHttp
    .get(`${this._url}`, { headers: contentHeaders} )
    .map((res: Response) => res.json())
    .map(data => {
      return data.map(contact => {
        return new Contact(
          contact._id,
          contact.email,
          contact.name,
          contact.city,
          contact.phoneNumber,
          contact.company,
          contact.createdAt
        )
      });
    })
    .subscribe((contacts: Array<Contact>) => {
      this._dataStore.contacts = contacts;
      this._contactsObserver.next(this._dataStore.contacts);
    }, err => console.error(err));
  }

  public getOne(id) {
    return this._authHttp
    .get(`${this._url}/${id}`, { headers: contentHeaders} )
    .map((res: Response) => res.json())
    .map(data => {
      return new Contact(
        data._id,
        data.email,
        data.name,
        data.city,
        data.phoneNumber,
        data.company,
        data.createdAt
      )
    })
    .subscribe((contact: Contact) => {
      this._dataStore.contact = contact;
      this._contactObserver.next(this._dataStore.contact);
    }, err => console.error(err));
  }

  public create(contact: Contact) {
    return this._authHttp
    .post(
      `${this._url}`,
      this._serialize(contact),
      { headers: contentHeaders}
    )
    .map((res: Response) => res.json())
    .map(data => {
      return new Contact(
        data._id,
        data.email,
        data.name,
        data.city,
        data.phoneNumber,
        data.company,
        data.createdAt
      )
    });
  }

  public update(contact: Contact) {
    return this._authHttp
    .put(
      `${this._url}/${contact._id}`,
      this._serialize(contact),
      { headers: contentHeaders}
    )
    .map((res: Response) => res.json())
    .map(data => {
      return new Contact(
        data._id,
        data.email,
        data.name,
        data.city,
        data.phoneNumber,
        data.company,
        data.createdAt
      );
    });
  }

  public remove(contactId: string) {
    this._authHttp
    .delete(`${this._url}/${contactId}`)
    .subscribe(() => {
      this._dataStore.contacts.map((c, i) => {
        if (c._id === contactId) {
          this._dataStore.contacts.splice(i, 1);
        }
      });
      this._contactsObserver.next(this._dataStore.contacts);
    }, err => console.error(err));
  }

  private _serialize(data) {
    return JSON.stringify(data);
  }
}
