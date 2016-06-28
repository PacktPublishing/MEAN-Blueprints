System.register(['angular2/core', 'angular2/router', '../contact.service', '../contact'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_service_1, contact_1;
    var ContactEditComponent;
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
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            ContactEditComponent = (function () {
                function ContactEditComponent(contactService, routerParams) {
                    this._contactService = contactService;
                    this._routeParams = routerParams;
                }
                ContactEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.contact = new contact_1.Contact();
                    this._contactService
                        .contact.subscribe(function (contact) {
                        _this.contact = contact;
                    });
                    this._contactService.getOne(id);
                };
                ContactEditComponent.prototype.onSubmit = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._contactService
                        .update(this.contact)
                        .subscribe(function (contact) {
                        _this.contact = contact;
                    }, function (err) { return console.error(err); });
                };
                ContactEditComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-edit',
                        directives: [router_1.RouterLink],
                        templateUrl: 'src/contact/components/contact-form.html'
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.RouteParams])
                ], ContactEditComponent);
                return ContactEditComponent;
            }());
            exports_1("ContactEditComponent", ContactEditComponent);
        }
    }
});
//# sourceMappingURL=contact-edit.component.js.map