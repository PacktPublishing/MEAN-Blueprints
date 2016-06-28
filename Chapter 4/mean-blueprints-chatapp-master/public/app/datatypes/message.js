// export interface Message {
//   _id: string;
//   sender: string;
//   thread: string;
//   body: string;
//   createdAt: string;
// }
System.register([], function(exports_1) {
    "use strict";
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(_id, sender, thread, body, createdAt) {
                    this._id = _id;
                    this.sender = sender;
                    this.body = body;
                    this.createdAt = createdAt;
                    this.time = this._generateTime(new Date(createdAt));
                    this.fulltime = this._generateDateTime(new Date(createdAt));
                }
                Message.prototype._generateTime = function (date) {
                    return date.getHours() + ":"
                        + date.getMinutes() + ":"
                        + date.getSeconds();
                };
                Message.prototype._generateDateTime = function (date) {
                    return date.getDate() + "/"
                        + (date.getMonth() + 1) + "/"
                        + date.getFullYear() + " @ "
                        + this._generateTime(date);
                };
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
//# sourceMappingURL=message.js.map