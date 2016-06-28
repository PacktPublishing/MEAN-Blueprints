// export interface Message {
//   _id: string;
//   sender: string;
//   thread: string;
//   body: string;
//   createdAt: string;
// }

export class Message {
  _id: string;
  sender: any;
  thread: string;
  body: string;
  createdAt: string;
  time: string;
  fulltime: string;

  constructor(_id?: string, sender?: any, thread?: string, body?: string, createdAt?: string) {
    this._id = _id;
    this.sender = sender;
    this.body = body;
    this.createdAt = createdAt;
    this.time = this._generateTime(new Date(createdAt));
    this.fulltime = this._generateDateTime(new Date(createdAt));
  }

  private _generateTime(date) {
    return  date.getHours() + ":"
          + date.getMinutes() + ":"
          + date.getSeconds();
  }

  private _generateDateTime(date) {
    return date.getDate() + "/"
          + (date.getMonth()+1)  + "/"
          + date.getFullYear() + " @ "
          + this._generateTime(date);
  }

  // private generateTimeSince(date) {
  //   let now = +new Date();
  //   let seconds = Math.floor((now - date) / 1000);
  //
  //   let interval = Math.floor(seconds / 31536000);
  //
  //   if (interval > 1) {
  //       return interval + " years";
  //   }
  //   interval = Math.floor(seconds / 2592000);
  //   if (interval > 1) {
  //       return interval + " months";
  //   }
  //   interval = Math.floor(seconds / 86400);
  //   if (interval > 1) {
  //       return interval + " days";
  //   }
  //   interval = Math.floor(seconds / 3600);
  //   if (interval > 1) {
  //       return interval + " hours";
  //   }
  //   interval = Math.floor(seconds / 60);
  //   if (interval > 1) {
  //       return interval + " minutes";
  //   }
  //   return Math.floor(seconds) + " seconds";
  // }
}
