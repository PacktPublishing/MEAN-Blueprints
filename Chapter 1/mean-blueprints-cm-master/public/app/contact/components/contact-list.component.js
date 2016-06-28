System.register(['angular2/core', 'angular2/router', '../contact.service'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(contactService) {
                    this.contacts = [];
                    this._contactService = contactService;
                }
                ContactListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._contactService.contacts.subscribe(function (contacts) {
                        _this.contacts = contacts;
                    });
                    this._contactService.getAll();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        directives: [router_1.RouterLink],
                        template: "\n      <div class=\"row\">\n        <h4>\n          Total contacts: <span class=\"muted\">({{contacts.length}})</span>\n          <a href=\"#\" [routerLink]=\"['ContactCreate']\">add new</a>\n        </h4>\n        <div class=\"contact-list\">\n          <div class=\"card-item col col-25 contact-item\"\n            *ngFor=\"#contact of contacts\">\n            <img src=\"{{ contact.image }}\" />\n            <h3>\n              <a href=\"#\" [routerLink]=\"['ContactEdit', { id: contact._id }]\">\n                {{ contact.name }}\n              </a>\n            </h3>\n            <p>\n              <span>{{ contact.city }}</span>\n              <span>\u00B7</span>\n              <span>{{ contact.company }}</span>\n            </p>\n            <p><span>{{ contact.email }}</span></p>\n            <p><span>{{ contact.phoneNumber }}</span></p>\n          </div>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map