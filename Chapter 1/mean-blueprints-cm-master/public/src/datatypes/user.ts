export class User {
  _id:            string;
  email:          string;
  name:           string;
  createdAt:      string;

  constructor(
    _id?:         string,
    email?:       string,
    name?:        any,
    createdAt?:   string
  ) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.createdAt = createdAt;
  }
}
