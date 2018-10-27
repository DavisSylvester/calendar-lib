(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CalendarLib", "./Months", "./Weeks"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalendarLib_1 = require("./CalendarLib");
    exports.Calendar = CalendarLib_1.Calendar;
    __export(require("./Months"));
    __export(require("./Weeks"));
});
//# sourceMappingURL=index.js.map