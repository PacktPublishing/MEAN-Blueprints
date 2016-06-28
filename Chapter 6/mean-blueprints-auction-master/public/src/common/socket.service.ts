import { Injectable } from 'angular2/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Rx';
import { ObservableBid } from '../bid/index';
import { ObservableBidder } from '../bidder/index'

@Injectable()
export class SocketService {
  public bid: Observable<any>;
  public bidder: ObservableBidder;
  private _io: any;

  constructor() {
    // connect to default SocketIO server
    this._io = io.connect();
    this._bindListeners();
  }

  public emit(...args) {
    this._io.emit.apply(this, args);
  }

  private _bindListeners() {
    console.log('should listen for incoming events');
    // this.prob = Observable.fromEvent(this.io, 'probe:single');
    // this.bid = Observable.fromEvent(
    //   this._io, 'auction:new:bid'
    // ).share();

    let probeSource = Observable.fromEvent(
      this._io, 'bid:probe'
    )
    let bidSource = Observable.fromEvent(
      this._io, 'auction:new:bid'
    )

    this.bid = Observable.merge(probeSource, bidSource);

    this.bidder = Observable.fromEvent(
      this._io, 'bidder:joined:auction'
    ).share();
  }
}
