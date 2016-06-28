System.register([], function(exports_1) {
    "use strict";
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(_id, email, name, createdAt) {
                    this._id = _id;
                    this.email = email;
                    this.name = name;
                    this.avatar = 'http://www.gravatar.com/avatar/{{hash}}?s=50&r=g&d=retro'.replace('{{hash}}', _id);
                    this.createdAt = createdAt;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map