System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../common/headers'], function(exports_1) {
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
    var core_1, http_1, Observable_1, headers_1;
    var UserService;
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
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    var _this = this;
                    this._http = http;
                    this.users = new Observable_1.Observable(function (observer) { return _this._userObservers = observer; }).share();
                    this._dataStore = { users: [] };
                    this.getAll();
                }
                UserService.prototype.getAll = function () {
                    var _this = this;
                    return this._http
                        .get('/api/users', { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (users) { return _this.storeUsers(users); });
                };
                // findById(id: number) {
                //   return this._http
                //   .get('/api/users/'+id, { headers: contentHeaders })
                //   .map((res: Response) => res.json());
                // }
                UserService.prototype.storeUsers = function (users) {
                    this._dataStore.users = users;
                    this._userObservers.next(this._dataStore.users);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map