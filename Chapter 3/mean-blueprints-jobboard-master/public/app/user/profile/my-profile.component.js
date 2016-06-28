System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MyProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyProfileComponent = (function () {
                function MyProfileComponent() {
                }
                MyProfileComponent.prototype.ngOnInit = function () {
                };
                MyProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'job-board',
                        directives: [],
                        template: "\n    <section>\n\n      <div class=\"jumbotron\">\n        <h2>Hi! {{user.name}}</h2>\n        <p class=\"lead\">Your public e-mail is <span>{{user.email}}</span> <br> and this is your profile</p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"profile-block\" ng-repeat=\"block in vm.user.profile\">\n            <profile-block ng-model=\"block\"></profile-block>\n          </div>\n        </div>\n\n        <form class=\"form-horizontal col-md-12\">\n          <div class=\"form-group\">\n            <div class=\"col-md-12\">\n              <input ng-model=\"vm.newBlock.title\" type=\"text\" class=\"form-control\" placeholder=\"Block title\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12\">\n              <button ng-click=\"vm.addBlock()\" class=\"btn btn-default btn-block\">New block</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyProfileComponent);
                return MyProfileComponent;
            }());
            exports_1("MyProfileComponent", MyProfileComponent);
        }
    }
});
//# sourceMappingURL=my-profile.component.js.map