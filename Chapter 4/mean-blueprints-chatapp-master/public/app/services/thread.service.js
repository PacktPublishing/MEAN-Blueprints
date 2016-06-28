System.register(['angular2/core', 'angular2/http', 'rxjs/Subject/BehaviorSubject', 'rxjs/Observable', '../common/headers', '../datatypes/thread'], function(exports_1) {
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
    var core_1, http_1, BehaviorSubject_1, Observable_1, headers_1, thread_1;
    var ThreadService;
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (thread_1_1) {
                thread_1 = thread_1_1;
            }],
        execute: function() {
            ThreadService = (function () {
                function ThreadService(http) {
                    var _this = this;
                    this.currentThread = new BehaviorSubject_1.BehaviorSubject(new thread_1.Thread());
                    this._http = http;
                    this._dataStore = { threads: [] };
                    this.threads = new Observable_1.Observable(function (observer) { return _this._threadObservers = observer; }).share();
                }
                ThreadService.prototype.open = function (data) {
                    return this._http
                        .post('/api/thread/open', JSON.stringify(data), { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return new thread_1.Thread(data._id, data.name, data.participants, data.createdAt);
                    });
                };
                ThreadService.prototype.getAll = function () {
                    var _this = this;
                    return this._http
                        .get('/api/threads', { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return data.map(function (thread) {
                            return new thread_1.Thread(thread._id, thread._id, thread.participants, thread.createdAt);
                        });
                    })
                        .subscribe(function (threads) { return _this.storeThreads(threads); });
                    // .subscribe(threads => {
                    //   // this._dataStore.threads = threads;
                    //   // this._threadObservers.next(this._dataStore.threads);
                    // });
                    // .map(data => {
                    //   let threads: Array<Thread> = [];
                    //   threads = data.map(thread => {
                    //     let names = [];
                    //     let threadName = '';
                    //     thread.participants.map(participant => {
                    //
                    //       if (this._dataStore.currentUser._id !== participant._id) {
                    //         names.push(participant.name);
                    //       }
                    //     });
                    //     threadName = (names[1]) ? names.join(', ') : names[0];
                    //     return new Thread(thread._id, thread.name || threadName, thread.participants, thread.createdAt);
                    //   });
                    //
                    //   return threads;
                    // })
                };
                ThreadService.prototype.setCurrentThread = function (newThread) {
                    this.currentThread.next(newThread);
                };
                ThreadService.prototype.storeThread = function (thread) {
                    var found = this._dataStore.threads.find(function (t) {
                        return t._id === thread._id;
                    });
                    if (!found) {
                        this._dataStore.threads.push(thread);
                        this._threadObservers.next(this._dataStore.threads);
                    }
                };
                ThreadService.prototype.storeThreads = function (threads) {
                    this._dataStore.threads = threads;
                    this._threadObservers.next(this._dataStore.threads);
                };
                ThreadService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ThreadService);
                return ThreadService;
            }());
            exports_1("ThreadService", ThreadService);
        }
    }
});
//# sourceMappingURL=thread.service.js.map