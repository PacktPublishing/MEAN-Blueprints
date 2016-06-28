System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                }
                MessageComponent.prototype.ngAfterViewInit = function () {
                    var ml = document.querySelector('message-list .message-list');
                    ml.scrollTop = ml.scrollHeight;
                };
                MessageComponent = __decorate([
                    core_1.Component({
                        inputs: ['message'],
                        selector: 'message',
                        template: "\n      <div class=\"message-item\">\n        <div class=\"message-identifier\">\n          <img src=\"{{message.sender.avatar}}\" widht=\"36\" height=\"36\"/>\n        </div>\n        <div class=\"message-content\">\n          <div class=\"message-sender\">\n            <span class=\"user-name\">{{message.sender.name}}</span>\n            <span class=\"message-timestamp\" title={{message.fulltime}}>{{message.time}}</span>\n          </div>\n          <div class=\"message-body\">\n            {{message.body}}\n          </div>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=message.component.js.map