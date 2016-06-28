System.register(['angular2/core', 'rxjs/Observable', '../common/headers', '../auth/auth-http', '../datatypes/contact'], function(exports_1, context_1) {
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
    var core_1, Observable_1, headers_1, auth_http_1, contact_1;
    var DEFAULT_URL, ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (auth_http_1_1) {
                auth_http_1 = auth_http_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            DEFAULT_URL = '/api/contacts';
            ContactService = (function () {
                function ContactService(authHttp) {
                    var _this = this;
                    this._authHttp = authHttp;
                    this._url = DEFAULT_URL;
                    this._dataStore = { contacts: [], contact: new contact_1.Contact() };
                    this.contacts = new Observable_1.Observable(function (observer) { return _this._contactsObserver = observer; }).share();
                    this.contact = new Observable_1.Observable(function (observer) { return _this._contactObserver = observer; }).share();
                }
                ContactService.prototype.getAll = function () {
                    var _this = this;
                    return this._authHttp
                        .get("" + this._url, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return data.map(function (contact) {
                            return new contact_1.Contact(contact._id, contact.email, contact.name, contact.city, contact.phoneNumber, contact.createdAt);
                        });
                    })
                        .subscribe(function (contacts) {
                        _this._dataStore.contacts = contacts;
                        _this._contactsObserver.next(_this._dataStore.contacts);
                    });
                };
                ContactService.prototype.getOne = function (id) {
                    var _this = this;
                    return this._authHttp
                        .get(this._url + "/" + id, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return new contact_1.Contact(data._id, data.email, data.name, data.city, data.phoneNumber, data.createdAt);
                    })
                        .subscribe(function (contact) {
                        _this._dataStore.contact = contact;
                        _this._contactObserver.next(_this._dataStore.contact);
                    });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [auth_http_1.AuthHttp])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});
//# sourceMappingURL=contact.service.js.map