"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarLib_1 = require("../../src/CalendarLib");
var calendar = null;
beforeEach(function () {
    calendar = new CalendarLib_1.Calendar(2018, 12);
});
test("Create an Instance of the Calendar", function () {
    expect(calendar).not.toBeFalsy();
});
test("Advance Calendar by One Month", function () {
    calendar.next();
    expect(calendar.CurrentMonth === 0 && calendar.CurrentYear === 2019).toBeTruthy();
    // expect(calendar.CurrentMonth).toBe(0);
});
//# sourceMappingURL=calendar.test.js.map