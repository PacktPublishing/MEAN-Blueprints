System.register(['angular2/core', 'angular2/router', 'rxjs/Subject/ReplaySubject', '../services/user.service', '../services/thread.service'], function(exports_1) {
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
    var core_1, router_1, ReplaySubject_1, user_service_1, thread_service_1;
    var UserListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(userService, threadService, router) {
                    var _this = this;
                    this.selected = false;
                    this.search = new ReplaySubject_1.ReplaySubject(1);
                    this.searchValue = '';
                    this._userService = userService;
                    this._threadService = threadService;
                    this._router = router;
                    this._userService.users.subscribe(function (users) {
                        _this.filteredUsers = _this.users = users;
                    });
                    this.search
                        .debounceTime(200)
                        .distinctUntilChanged()
                        .subscribe(function (value) {
                        _this.filteredUsers = _this.users.filter(function (user) {
                            return user.name.toLowerCase().startsWith(value);
                        });
                    });
                }
                UserListComponent.prototype.onInput = function (event) {
                    this.search.next(event.target.value);
                };
                UserListComponent.prototype.onFocus = function () {
                    this.selected = true;
                };
                UserListComponent.prototype.onClose = function (event) {
                    this.cleanUp();
                    event.preventDefault();
                };
                UserListComponent.prototype.onEsc = function (event) {
                    this.cleanUp();
                    var target = event.target;
                    target.blur();
                    event.preventDefault();
                };
                UserListComponent.prototype.openThread = function (event, user) {
                    var _this = this;
                    this._threadService.open({ userId: user._id }).subscribe(function (thread) {
                        _this._threadService.storeThread(thread);
                        _this._router.navigate(['./ThreadMessages', { identifier: thread._id }]);
                        _this.cleanUp();
                    });
                };
                UserListComponent.prototype.cleanUp = function () {
                    this.searchValue = '';
                    this.selected = false;
                    this.search.next('');
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        template: "\n      <div class=\"user-search-container\">\n        <input\n          type=\"text\"\n          class=\"form-control block\"\n          placeholder=\"start a conversation\"\n          [(ngModel)]=\"searchValue\"\n          (focus)=\"onFocus($event)\"\n          (input)=\"onInput($event)\"\n          (keydown.esc)=\"onEsc($event)\"\n        />\n      </div>\n      <div class=\"user-list-container\">\n        <div class=\"users-container\" [ngClass]=\"{active: selected }\">\n          <div class=\"user-list-toobar\">\n            <a href=\"#\" (click)=\"onClose($event)\" class=\"close-button\">\n              <span>\u00D7</span>\n              <span class=\"close-text\">esc</span>\n            </a>\n          </div>\n          <div *ngFor=\"#user of filteredUsers\">\n            <a href=\"javascript:void(0);\" (click)=\"openThread($event, user)\">{{user.name}}</a>\n          </div>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, thread_service_1.ThreadService, router_1.Router])
                ], UserListComponent);
                return UserListComponent;
            }());
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=user-list.component.js.map