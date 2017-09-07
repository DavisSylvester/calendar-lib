System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DaysOfWeek;
    return {
        setters: [],
        execute: function () {
            (function (DaysOfWeek) {
                DaysOfWeek[DaysOfWeek["SUNDAY"] = 0] = "SUNDAY";
                DaysOfWeek[DaysOfWeek["MONDAY"] = 1] = "MONDAY";
                DaysOfWeek[DaysOfWeek["TUESDAY"] = 2] = "TUESDAY";
                DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
                DaysOfWeek[DaysOfWeek["THURSDAY"] = 4] = "THURSDAY";
                DaysOfWeek[DaysOfWeek["FRIDAY"] = 5] = "FRIDAY";
                DaysOfWeek[DaysOfWeek["SATURDAY"] = 6] = "SATURDAY";
            })(DaysOfWeek || (DaysOfWeek = {}));
            exports_1("DaysOfWeek", DaysOfWeek);
        }
    };
});
//# sourceMappingURL=Weeks.js.map