System.register(['angular2/core', 'angular2/http', 'rxjs/Subject/BehaviorSubject', '../../common/index', '../../auth/index'], function(exports_1, context_1) {
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
    var core_1, http_1, BehaviorSubject_1, index_1, index_2;
    var ProfileService;
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
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService(http, authHttp) {
                    var _this = this;
                    this.user = new BehaviorSubject_1.BehaviorSubject({});
                    this.profile = new BehaviorSubject_1.BehaviorSubject([]);
                    this._http = http;
                    this._authHttp = authHttp;
                    this._dataStore = { profile: [] };
                    this.profile.subscribe(function (profile) {
                        _this._dataStore.profile = profile;
                    });
                }
                ProfileService.prototype.getProfile = function () {
                    var _this = this;
                    this._authHttp
                        .get('/api/profile', { headers: index_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (user) {
                        _this.user.next(user);
                        _this.profile.next(user.profile);
                    });
                };
                ProfileService.prototype.createProfileBlock = function (block) {
                    var _this = this;
                    var body = JSON.stringify(block);
                    this._authHttp
                        .post('/api/profile/blocks', body, { headers: index_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (block) {
                        _this._dataStore.profile.push(block);
                        _this.profile.next(_this._dataStore.profile);
                    }, function (err) { return console.error(err); });
                };
                ProfileService.prototype.updateProfileBlock = function (block) {
                    var _this = this;
                    if (!block._id) {
                        this.createProfileBlock(block);
                    }
                    else {
                        var body = JSON.stringify(block);
                        this._authHttp
                            .put("/api/profile/blocks/" + block._id, body, { headers: index_1.contentHeaders })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (block) {
                            _this.updateLocalBlock(block);
                        }, function (err) { return console.error(err); });
                    }
                };
                ProfileService.prototype.updateLocalBlock = function (data) {
                    this._dataStore.profile.forEach(function (block) {
                        if (block._id === data._id) {
                            block = data;
                        }
                    });
                    this.profile.next(this._dataStore.profile);
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, index_2.AuthHttp])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});
//# sourceMappingURL=profile.service.js.map