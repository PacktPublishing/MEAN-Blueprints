System.register(['angular2/core', '../services/contact.service', './contact.component'], function(exports_1, context_1) {
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
    var core_1, contact_service_1, contact_component_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(contactService) {
                    var _this = this;
                    this.contacts = [];
                    this._contactService = contactService;
                    this._contactService.contacts.subscribe(function (contacts) {
                        _this.contacts = contacts;
                    });
                    this._contactService.getAll();
                }
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        directives: [contact_component_1.ContactComponent],
                        template: "\n      <div class=\"row\">\n        <h4>Total contacts: <span class=\"muted\">({{contacts.length}})</span></h4>\n        <div class=\"contact-list\">\n          <contact\n            *ngFor=\"#contact of contacts\"\n            [contact]=\"contact\">\n          </contact>\n        </div>\n      </div>\n    "
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