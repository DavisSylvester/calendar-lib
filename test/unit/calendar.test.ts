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

    console.log(`Current Month: ${a.CurrentMonth}\n Current Year: ${a.CurrentYear}`);
    a.previous();
    console.log(`Current Month: ${a.CurrentMonth}\n Current Year: ${a.CurrentYear}`);
    expect(a.CurrentMonth === 2).toBe(true);

});

test("Substract Calendar by One Month in January", () => {

    let a = new Calendar(2018, 0);
    a.previous();
    expect(a.CurrentMonth === 12 && a.CurrentYear === 2017).toBe(true);

});