export class Contact {
  _id: string;
  email: string;
  name: string;
  city: string;
  phoneNumber: string;
  company: string;
  image: string;
  createdAt: string;

  constructor(
    _id?: string,
    email?: string,
    name?: string,
    city?: string,
    phoneNumber?: string,
    company?: string,
    createdAt?: string
  ) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.city = city;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.image = 'http://placehold.it/171x100';
    this.createdAt = createdAt;
  }
}
