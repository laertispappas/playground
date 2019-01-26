"use strict";
var Log = (function () {
    function Log(developer, text, _id, date) {
        this.developer = developer;
        this.text = text;
        this._id = _id;
        this.date = date;
    }
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map