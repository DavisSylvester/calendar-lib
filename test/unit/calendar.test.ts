import { Calendar } from "../../src/CalendarLib";

let calendar: Calendar = null;

beforeEach(() => {

    calendar = new Calendar(2018, 12);
});

test("Create an Instance of the Calendar", () => {

    expect(calendar).not.toBeFalsy();

});

test("Advance Calendar by One Month", () => {

    let a = new Calendar(2018, 3);

    a.next();

    expect(a.CurrentMonth === 5).toBe(true);

});

test("Advance Calendar by One Month in Dec", () => {

    let a = new Calendar(2018, 12);
    a.next();
    expect(a.CurrentMonth === 1 && a.CurrentYear === 2019).toBe(true);

});

test("Substract Calendar by One Month", () => {

    let a = new Calendar(2018, 3);

    a.previous();

    expect(a.CurrentMonth === 2).toBe(true);

});

test("Substract Calendar by One Month in January", () => {

    let a = new Calendar(2018, 1);
    let b = a.previous();

    expect(b.CurrentMonth === 12 && b.CurrentYear === 2017).toBe(true);

});

test("Get Calendar Month Name after Substracting a Month", () => {

    let a = new Calendar(2018, 4);
    let b = a.previous();
    expect(b.MonthName).toBe("March");

});