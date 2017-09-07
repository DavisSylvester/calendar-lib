System.register(["./CalendarLib", "./Months", "./Weeks"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Calendar": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (CalendarLib_1_1) {
                exports_1({
                    "Calendar": CalendarLib_1_1["Calendar"]
                });
            },
            function (Months_1_1) {
                exportStar_1(Months_1_1);
            },
            function (Weeks_1_1) {
                exportStar_1(Weeks_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map