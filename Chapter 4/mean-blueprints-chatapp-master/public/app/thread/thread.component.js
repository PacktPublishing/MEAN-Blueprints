System.register(['angular2/core', 'angular2/router', '../services/thread.service'], function(exports_1) {
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
    var core_1, router_1, thread_service_1;
    var ThreadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            }],
        execute: function() {
            ThreadComponent = (function () {
                function ThreadComponent(threadService) {
                    this.selected = false;
                    this._threadService = threadService;
                }
                ThreadComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._threadService.currentThread.subscribe(function (thread) {
                        _this.selected = thread && _this.thread && (thread._id === _this.thread._id);
                    });
                };
                ThreadComponent = __decorate([
                    core_1.Component({
                        inputs: ['thread'],
                        selector: 'thread',
                        directives: [router_1.RouterLink],
                        template: "\n      <div class=\"thread-item\">\n        <a href=\"#\" [routerLink]=\"['./ThreadMessages', { identifier: thread._id }]\" data-id=\"{{thread._id}}\">\n          {{thread.name}}\n          <span *ngIf=\"selected\"> &bull; </span>\n        </a>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [thread_service_1.ThreadService])
                ], ThreadComponent);
                return ThreadComponent;
            }());
            exports_1("ThreadComponent", ThreadComponent);
        }
    }
});
//# sourceMappingURL=thread.component.js.map