'use strict';

const Server = require('socket.io');
const mediator = require('./mediator')();
const AuctionManager = require('./auction-manager');
const auctionManager =  new AuctionManager();

class Auctioneer {
  constructor(app, server) {
    this.connectedClients = {};
    this.io = new Server(server);
    // this.io.serveClient(false);
    // this.io.attach(server);
    this.sessionMiddleware = app.get('sessionMiddleware');
    this.initMiddlewares();
    this.bindHandlers();
    this.bindListeners();
  }

  initMiddlewares() {
    let self = this;
    this.io.use((socket, next) => {
      let amount = 10;
      setInterval(function () {
        amount += 10;
        let bid = {
          _id: `${Date.now()}`,
          bidder: '1p2r3o4b5e',
          amount: amount,
          auctionId: '571d37c1e3bce9f832e6e70f'
        };

        socket.emit('bid:probe', bid);
        console.log('bid:probe', bid);
      }, 5000);
      next();
    });
    this.io.use((socket, next) => {
      this.sessionMiddleware(socket.request, socket.request.res, next);
    });

    // this.io.use((socket, next) => {
    //   let user = socket.request.session.passport.user;
    //
    //   // authorize user
    //   if (!user) {
    //     let err = new Error('Unauthorized');
    //     err.type = 'unauthorized';
    //     return next(err);
    //   }
    //
    //   // attach user to the socket, like req.user
    //   socket.user = {
    //     _id: socket.request.session.passport.user
    //   };
    //   next();
    // });
  }

  bindHandlers() {
    let self = this;
    this.io.on('connection', (socket) => {
      // add client to the socket list to get the session later
      let userId = socket.request.session.passport.user;
      this.connectedClients[userId] = socket;

      // when user places a bid
      socket.on('place:bid', (data) => {
        auctionManager.placeBid(
          data.auctionId,
          socket.user._id,
          data.amount,
          (err, bid) => {
            if (err) {
              return socket.emit('place:bid:error', err);
            }

            socket.emit('place:bid:success', bid);
          }
        );

      });
    });
  }

  bindListeners() {
    mediator.on('bidder:joined:auction', (bidder) => {
      let bidderId = bidder._id.toString();
      let currentSocket = this.connectedClients[bidderId];
      currentSocket.emit.broadcast('bidder:joined:auction', bidder);
    });

    mediator.on('auction:new:bid', (bid) => {
      this.io.sockets.emit('auction:new:bid', bid);
    });
  }
}

module.exports = Auctioneer;
