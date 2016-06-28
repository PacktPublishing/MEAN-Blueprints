System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './thread.service', '../common/headers', '../datatypes/message', '../datatypes/user', 'socket.io-client'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, thread_service_1, headers_1, message_1, user_1, io;
    var MessageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (io_1) {
                io = io_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService(http, threadService) {
                    var _this = this;
                    this._io = io.connect();
                    this._http = http;
                    this._threadService = threadService;
                    this.messages = new Observable_1.Observable(function (observer) { return _this._messagesObservers = observer; }).share();
                    this._dataStore = { messages: [] };
                    this._socketOn();
                }
                MessageService.prototype.getByThread = function (threadId) {
                    var _this = this;
                    this._http
                        .get('/api/threads/' + threadId + '/messages', { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        return res.map(function (data) {
                            var sender = new user_1.User(data.sender._id, data.sender.email, data.sender.name, data.sender.createdAt);
                            return new message_1.Message(data._id, sender, data.thread, data.body, data.createdAt);
                        });
                    })
                        .subscribe(function (messages) {
                        _this._dataStore.messages = messages;
                        _this._messagesObservers.next(_this._dataStore.messages);
                    });
                };
                MessageService.prototype.sendMessage = function (message) {
                    this._io.emit('send:im', message);
                };
                MessageService.prototype._socketOn = function () {
                    var _this = this;
                    this._io.on('receive:im', function (message) { return _this._storeMessage(message); });
                    this._io.on('send:im:success', function (message) { return _this._storeMessage(message); });
                };
                MessageService.prototype._storeMessage = function (message) {
                    var sender = new user_1.User(message.sender._id, message.sender.email, message.sender.name, message.sender.createdAt);
                    var m = new message_1.Message(message._id, new user_1.User(sender._id, sender.email, sender.name, sender.createdAt), message.thread, message.body, message.createdAt);
                    this._dataStore.messages.push(m);
                    this._messagesObservers.next(this._dataStore.messages);
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, thread_service_1.ThreadService])
                ], MessageService);
                return MessageService;
            }());
            exports_1("MessageService", MessageService);
        }
    }
});
//# sourceMappingURL=message.service.js.map