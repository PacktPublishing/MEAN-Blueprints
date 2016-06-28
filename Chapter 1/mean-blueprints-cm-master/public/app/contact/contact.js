System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact(_id, email, name, city, phoneNumber, company, createdAt) {
                    this._id = _id;
                    this.email = email;
                    this.name = name;
                    this.city = city;
                    this.phoneNumber = phoneNumber;
                    this.company = company;
                    this.image = 'http://placehold.it/171x100';
                    this.createdAt = createdAt;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=contact.js.map