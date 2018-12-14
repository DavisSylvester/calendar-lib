const cal = require("../../app/CalendarLib");

test('Create an Instance of the Calendar', () => {

    const calendar = new cal.Calendar(2018, 12);    

    expect(calendar).not.toBeFalsy();

});