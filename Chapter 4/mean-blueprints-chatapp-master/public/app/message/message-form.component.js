System.register(['angular2/core', '../services/thread.service', '../services/message.service', '../datatypes/message'], function(exports_1) {
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
    var core_1, thread_service_1, message_service_1, message_1;
    var MessageFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageFormComponent = (function () {
                function MessageFormComponent(messageService, threadService) {
                    var _this = this;
                    this._messageService = messageService;
                    this._threadService = threadService;
                    this._threadService.currentThread.subscribe(function (thread) { return _this._thread = thread; });
                }
                MessageFormComponent.prototype.ngOnInit = function () {
                    this.draftMessage = new message_1.Message();
                };
                MessageFormComponent.prototype.onEnter = function (event) {
                    this.sendMessage();
                    event.preventDefault();
                };
                MessageFormComponent.prototype.sendMessage = function () {
                    var message = this.draftMessage;
                    message.thread = this._thread._id;
                    this._messageService.sendMessage(message);
                    this.draftMessage = new message_1.Message();
                };
                MessageFormComponent = __decorate([
                    core_1.Component({
                        selector: 'message-form',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n      <input\n        class=\"message-form form-control\"\n        autocorrect=\"off\" autocomplete=\"off\" spellcheck=\"true\"\n        (keydown.enter)=\"onEnter($event)\"\n        [(ngModel)]=\"draftMessage.body\"\n      >\n    "
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService, thread_service_1.ThreadService])
                ], MessageFormComponent);
                return MessageFormComponent;
            }());
            exports_1("MessageFormComponent", MessageFormComponent);
        }
    }
});
//# sourceMappingURL=message-form.component.js.map