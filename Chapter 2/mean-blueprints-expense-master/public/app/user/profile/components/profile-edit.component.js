System.register(['angular2/core', './profile-block.component', '../profile.service', '../block.model'], function(exports_1, context_1) {
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
    var core_1, profile_block_component_1, profile_service_1, block_model_1;
    var ProfileEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_block_component_1_1) {
                profile_block_component_1 = profile_block_component_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (block_model_1_1) {
                block_model_1 = block_model_1_1;
            }],
        execute: function() {
            ProfileEditComponent = (function () {
                function ProfileEditComponent(profileService) {
                    this._profileService = profileService;
                }
                ProfileEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = {};
                    this.newBlock = new block_model_1.Block();
                    this._profileService.user.subscribe(function (user) {
                        _this.user = user;
                    });
                    this._profileService.profile.subscribe(function (profile) {
                        _this.profile = profile;
                    });
                    this._profileService.getProfile();
                };
                ProfileEditComponent.prototype.onClick = function (event) {
                    event.preventDefault();
                    var profile = this.profile.slice(0); // clone the profile
                    var block = Object.assign({}, this.newBlock); // clone the new block
                    profile.push(block);
                    this._profileService.profile.next(profile);
                    this.newBlock = new block_model_1.Block();
                };
                ProfileEditComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-edit',
                        directives: [profile_block_component_1.ProfileBlockComponent],
                        template: "\n    <section>\n\n      <div class=\"jumbotron\">\n        <h2>Hi! {{user.name}}</h2>\n        <p class=\"lead\">Your public e-mail is <span>{{user.email}}</span> <br> and this is your profile</p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"profile-block\" *ngFor=\"#block of profile\">\n            <profile-block [block]=\"block\"></profile-block>\n          </div>\n        </div>\n\n        <form class=\"form-horizontal col-md-12\">\n          <div class=\"form-group\">\n            <div class=\"col-md-12\">\n              <input [(ngModel)]=\"newBlock.title\" type=\"text\" class=\"form-control\" placeholder=\"Block title\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12\">\n              <button (click)=\"onClick($event)\" class=\"button\">New block</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], ProfileEditComponent);
                return ProfileEditComponent;
            }());
            exports_1("ProfileEditComponent", ProfileEditComponent);
        }
    }
});
//# sourceMappingURL=profile-edit.component.js.map