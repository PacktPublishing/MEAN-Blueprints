'use strict';

const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const Thread = mongoose.model('Thread');

module.exports.init = initInstantMessagingModule;

class InstantMessagingModule {
  constructor(socket, clients) {
    this.socket = socket;
    this.clients = clients;
    //  simulated in-memory cache :)
    //  not the best place to keep this
    this.threads = {};
    this.bindHandlers();
  }

  bindHandlers() {
    this.socket.on('send:im', (data) => {
      data.sender = this.socket.user._id;

      // if (!data.thread) {
      //   return this.socket.emit('send:im:first', data);
      // }

      if (!data.thread) {
        let err = new Error('You must be participating in a conversation.')
        err.type = 'no_active_thread';
        return this.handleError(err);
      }

      this.storeIM(data, (err, message, thread) => {
        if (err) {
          return this.handleError(err);
        }

        this.socket.emit('send:im:success', message);

        this.deliverIM(message, thread);
        // for (let i = 0; i < thread.participants.length; i++) {
        //   if (thread.participants[i].toString() === data.sender) {
        //     continue;
        //   }
        //
        //   if (this.clients[thread.participants[i]]) {
        //     this.clients[thread.participants[i]].emit('receive:im', message);
        //   }
        // }
      });
    });

    // this.socket.on('send:im:first', function(data) {
    //   Thread.create(data, function(err, thread) {
    //     if (err) {
    //       return this.handleError(err);
    //     }
    //
    //     data.thread = thread._id.toString();
    //     socket.emit('send:im', data);
    //   });
    // });
  }

  storeIM(data, callback) {
    this.findThreadById(data.thread, (err, thread) => {
      if (err) {
        return callback(err);
      }

      let user = thread.participants.find((participant) => {
        return participant.toString() === data.sender.toString();
      });

      if (!user) {
        let err = new Error('Not a participant.')
        err.type = 'unauthorized_thread';
        return callback(err);
      }

      this.createMessage(data, (err, message) => {
        if (err) {
          return callback(err);
        }

        callback(err, message, thread);
      });
    });
  }

  deliverIM(message, thread) {
    for (let i = 0; i < thread.participants.length; i++) {
      if (thread.participants[i].toString() === message.sender.toString()) {
        continue;
      }

      if (this.clients[thread.participants[i]]) {
        this.clients[thread.participants[i]].emit('receive:im', message);
      }
    }
  }

  findThreadById(id, callback) {
    if (this.threads[id]) {
      return callback(null, this.threads[id]);
    }

    Thread.findById(id, (err, thread) => {
      if (err) {
        return callback(err);
      }

      this.threads[id] = thread;
      callback(null, thread);
    });
  }

  createMessage(data, callback) {
    Message.create(data, (err, newMessage) => {
      if (err) {
        return callback(err);
      }

      newMessage.populate('sender', callback);
    });
  }

  handleError(err) {
    console.error(err);
    return socket.emit('send:im:failure', err);
  }
}

function initInstantMessagingModule(socket, clients) {
  return new InstantMessagingModule(socket, clients);
}

// module.exports = InstantMessageModule;

// function initMessages(socket, clients, io) {
//   socket.on('send:im', function(data) {
//     data.sender = socket.user._id;
//
//     if (!data.thread) {
//       return socket.emit('send:im:first', data);
//     }
//
//     findThreadById(data.thread, function(err, thread) {
//       if (err) {
//         console.error(err);
//         return socket.emit('send:im:failure', err);
//       }
//
//       Message.create(data, function(err, message) {
//         if (err) {
//           console.error(err);
//           return socket.emit('send:im:failure', err);
//         }
//
//         message.populate('sender', function(err, message) {
//           if (err) {
//             console.error(err);
//             return socket.emit('send:im:failure', err);
//           }
//
//           socket.emit('send:im:success', message);
//           for (var i = 0; i < thread.participants.length; i++) {
//             if (thread.participants[i].toString() === data.sender) {
//               continue;
//             }
//
//             if (clients[thread.participants[i]]) {
//               clients[thread.participants[i]].emit('receive:im', message);
//             }
//           }
//         });
//       });
//     });
//   });
//
//   socket.on('send:im:first', function(data) {
//     Thread.create(data, function(err, thread) {
//       if (err) {
//         console.error(err);
//         return socket.emit('send:im:failure', err);
//       }
//
//       data.thread = thread._id.toString();
//       socket.emit('send:im', data);
//     });
//   });
// }
//
// function findThreadById(id, callback) {
//   if (threadMap[id]) {
//     return callback(null, threadMap[id]);
//   }
//
//   Thread.findById(id, function(err, thread) {
//     if (err) {
//       return callback(err);
//     }
//
//     threadMap[id] = thread;
//     callback(null, thread);
//   });
// }
