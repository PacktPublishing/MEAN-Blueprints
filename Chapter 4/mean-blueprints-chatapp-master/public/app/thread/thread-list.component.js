System.register(['angular2/core', '../services/thread.service', './thread.component'], function(exports_1) {
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
    var core_1, thread_service_1, thread_component_1;
    var ThreadListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (thread_component_1_1) {
                thread_component_1 = thread_component_1_1;
            }],
        execute: function() {
            ThreadListComponent = (function () {
                function ThreadListComponent(threadService) {
                    var _this = this;
                    this.threads = [];
                    this._threadService = threadService;
                    this._threadService.threads.subscribe(function (threads) {
                        _this.threads = threads;
                    });
                    this._threadService.getAll();
                }
                ThreadListComponent = __decorate([
                    core_1.Component({
                        selector: 'thread-list',
                        directives: [thread_component_1.ThreadComponent],
                        // changeDetection: ChangeDetectionStrategy.OnPushObserve,
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n      <h4>Recent <span class=\"muted\">({{threads.length}})</span></h4>\n      <thread\n        *ngFor=\"#thread of threads\"\n        [thread]=\"thread\">\n      </thread>\n    "
                    }), 
                    __metadata('design:paramtypes', [thread_service_1.ThreadService])
                ], ThreadListComponent);
                return ThreadListComponent;
            }());
            exports_1("ThreadListComponent", ThreadListComponent);
        }
    }
});
//# sourceMappingURL=thread-list.component.js.map