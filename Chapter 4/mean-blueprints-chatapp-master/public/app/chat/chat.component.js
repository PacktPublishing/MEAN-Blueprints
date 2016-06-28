System.register(['angular2/core', 'angular2/router', '../services/chat.service', '../thread/thread-list.component', '../message/message-list.component', '../message/message-form.component', '../user/user-list.component', './chat-help.component'], function(exports_1) {
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
    var core_1, router_1, chat_service_1, thread_list_component_1, message_list_component_1, message_form_component_1, user_list_component_1, chat_help_component_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (thread_list_component_1_1) {
                thread_list_component_1 = thread_list_component_1_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_form_component_1_1) {
                message_form_component_1 = message_form_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (chat_help_component_1_1) {
                chat_help_component_1 = chat_help_component_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent(chatService) {
                    this._chatService = chatService;
                }
                ChatComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', as: 'ThreadMessagesDefault', component: chat_help_component_1.ChatHelpComponent, useAsDefault: true },
                        { path: '/:identifier', as: 'ThreadMessages', component: message_list_component_1.MessageListComponent }
                    ]),
                    core_1.Component({
                        selector: 'chat',
                        directives: [
                            thread_list_component_1.ThreadListComponent,
                            message_form_component_1.MessageFormComponent,
                            user_list_component_1.UserListComponent,
                            router_1.RouterOutlet
                        ],
                        template: "\n    <div class=\"threads-container col sidebar\">\n      <user-list></user-list>\n      <thread-list></thread-list>\n    </div>\n\n    <div class=\"messages-container col content\">\n      <router-outlet></router-outlet>\n\n      <div class=\"message-form-container\">\n        <message-form></message-form>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map