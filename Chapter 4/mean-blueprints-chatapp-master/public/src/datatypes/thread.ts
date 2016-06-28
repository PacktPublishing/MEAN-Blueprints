import { User } from './user';

export class Thread {
  _id: string;
  name: string;
  participants: Array<User>;
  createdAt: string;

  constructor(_id?: string, name?: string, participants?: Array<User>, createdAt?: string) {
    this._id = _id;
    this.name = name || '';
    this.participants = participants || [];
    this.createdAt = createdAt;
  }

  generateName(omittedUser) {
    let names = [];
    this.participants.map(participant => {
      if (omittedUser._id !== participant._id) {
        names.push(participant.name);
      }
    });

    return (names[1]) ? names.join(', ') : names[0];
  }
}
