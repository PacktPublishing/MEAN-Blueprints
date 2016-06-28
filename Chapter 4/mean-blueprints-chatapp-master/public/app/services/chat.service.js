System.register(['angular2/core', 'angular2/http', 'rxjs/Subject/BehaviorSubject', '../datatypes/user'], function(exports_1) {
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
    var core_1, http_1, BehaviorSubject_1, user_1;
    var ChatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            ChatService = (function () {
                // private _threadService: ThreadService;
                function ChatService(http) {
                    this.currentUser = new BehaviorSubject_1.BehaviorSubject(new user_1.User());
                    this._http = http;
                    // this._threadService = threadService;
                    this.contactsMap = {};
                    // this.start().map(res => {
                    //   let threads: Array<Thread> = [];
                    //
                    //   res.threads.forEach(thread => {
                    //     let names = [];
                    //     let threadName = '';
                    //
                    //     thread.participants.map(participant => {
                    //       let user = new User(participant._id, participant.email, participant.name);
                    //
                    //       this.contactsMap[participant._id] = user;
                    //
                    //       if (res.self !== user._id) {
                    //         names.push(user.name);
                    //       }
                    //     });
                    //     threadName = (names[1]) ? names.join(', ') : names[0];
                    //     threads.push(new Thread(thread._id, threadName, thread.participants, thread.createdAt));
                    //   });
                    //   res.threads = threads;
                    //
                    //   return res;
                    // }).subscribe(data => {
                    //   this.currentUser.next(new User(data.self));
                    //   this._threadService.storeThreads(data.threads);
                    // });
                }
                ChatService.prototype.start = function () {
                    return this._http
                        .post('/api/chat/start', '{}')
                        .map(function (res) { return res.json(); });
                };
                ChatService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ChatService);
                return ChatService;
            }());
            exports_1("ChatService", ChatService);
        }
    }
});
//# sourceMappingURL=chat.service.js.map