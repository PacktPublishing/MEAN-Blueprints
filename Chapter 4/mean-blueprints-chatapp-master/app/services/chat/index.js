'use strict';

const socketIO = require('socket.io');
const InstantMessagingModule = require('./instant-messaging.module');

module.exports = build;

class ChatService {
  constructor(app, server) {
    this.connectedClients = {};
    this.io = socketIO(server);
    this.sessionMiddleware = app.get('sessionMiddleware');
    this.initMiddlewares();
    this.bindHandlers();
  }

  initMiddlewares() {
    this.io.use((socket, next) => {
      this.sessionMiddleware(socket.request, socket.request.res, next);
    });

    this.io.use((socket, next) => {
      let user = socket.request.session.passport.user;

      //  authorize user
      if (!user) {
        let err = new Error('Unauthorized');
        err.type = 'unauthorized';
        return next(err);
      }

      // attach user to the socket, like req.user
      socket.user = {
        _id: socket.request.session.passport.user
      };
      next();
    });
  }

  bindHandlers() {
    this.io.on('connection', socket => {
      console.info(
        'Client connected. Connection id: %s. User id: %s ',
        socket.id,
        socket.request.session.passport.user
      );
      // add client to the socket list to get the session later
      this.connectedClients[socket.request.session.passport.user] = socket;
      InstantMessagingModule.init(socket, this.connectedClients, this.io);
    });
  }
}

function build(app, server) {
  return new ChatService(app, server);
}

// function ChatService(app, server) {
//   const io = socketIO(server);
//   const sessionMiddleware = app.get('sessionMiddleware');
//
//   io.use(function(socket, next) {
//     sessionMiddleware(socket.request, socket.request.res, next);
//   });
//
//   io.use(function(socket, next) {
//     socket.user = {
//       _id: socket.request.session.passport.user
//     };
//     next();
//   });
//
//   io.on('connection', function(socket) {
//     // add client to the socket list to get the session later
//     connectedClients[socket.request.session.passport.user] = socket;
//     messages.init(socket, connectedClients, io);
//   });
// }
