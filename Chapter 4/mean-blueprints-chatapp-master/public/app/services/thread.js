System.register([], function(exports_1) {
    "use strict";
    var Thread;
    return {
        setters:[],
        execute: function() {
            Thread = (function () {
                function Thread(_id, name, participants, createdAt) {
                    if (name === void 0) { name = ''; }
                    this._id = _id;
                    this.name = name;
                    this.participants = participants;
                    this.createdAt = createdAt;
                }
                return Thread;
            })();
            exports_1("Thread", Thread);
        }
    }
});
//# sourceMappingURL=thread.js.map