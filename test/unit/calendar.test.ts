import { Calendar } from "../../src/CalendarLib";

let calendar: Calendar = null;

beforeEach(() => {

    calendar = new Calendar(2018, 12);
});

test("Create an Instance of the Calendar", () => {

    expect(calendar).not.toBeFalsy();

});

test("Advance Calendar by One Month", () => {

    calendar.next();
    expect(calendar.CurrentMonth === 0 && calendar.CurrentYear === 2019).toBeTruthy();
    // expect(calendar.CurrentMonth).toBe(0);

});