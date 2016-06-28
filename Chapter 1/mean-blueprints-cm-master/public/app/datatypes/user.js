System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(_id, email, name, createdAt) {
                    this._id = _id;
                    this.email = email;
                    this.name = name;
                    this.createdAt = createdAt;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map