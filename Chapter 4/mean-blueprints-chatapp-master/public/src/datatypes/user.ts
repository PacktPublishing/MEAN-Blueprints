export class User {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt: string;

  constructor(_id?: string, email?: string, name?: string, createdAt?: string) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.avatar = 'http://www.gravatar.com/avatar/{{hash}}?s=50&r=g&d=retro'.replace('{{hash}}', _id);
    this.createdAt = createdAt;
  }
}
