System.register(['angular2/core', 'socket.io-client', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, io, Rx_1;
    var SocketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (io_1) {
                io = io_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                    // connect to default SocketIO server
                    this._io = io.connect();
                    this._bindListeners();
                }
                SocketService.prototype.emit = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    this._io.emit.apply(this, args);
                };
                SocketService.prototype._bindListeners = function () {
                    console.log('should listen for incoming events');
                    // this.prob = Observable.fromEvent(this.io, 'probe:single');
                    // this.bid = Observable.fromEvent(
                    //   this._io, 'auction:new:bid'
                    // ).share();
                    var probeSource = Rx_1.Observable.fromEvent(this._io, 'bid:probe');
                    var bidSource = Rx_1.Observable.fromEvent(this._io, 'auction:new:bid');
                    this.bid = Rx_1.Observable.merge(probeSource, bidSource);
                    this.bidder = Rx_1.Observable.fromEvent(this._io, 'bidder:joined:auction').share();
                };
                SocketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SocketService);
                return SocketService;
            }());
            exports_1("SocketService", SocketService);
        }
    }
});
//# sourceMappingURL=socket.service.js.map