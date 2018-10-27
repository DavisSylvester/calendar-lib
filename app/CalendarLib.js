"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calendar = /** @class */ (function () {
    function Calendar(year, month) {
        this.today = new Date();
        this.WeekCalendarData = new Array();
        this.FullCalendarData = new Array();
        if (year.toString().length > 4) {
            throw ("Your must pass a valid year as the 1st parameter");
        }
        if (year === undefined) {
            year = this.today.getFullYear();
            this.currentYear = year;
        }
        else {
            this.currentYear = year;
        }
        if (month === undefined) {
            month = this.today.getMonth();
            this.currentMonth = month - 1;
            this.MonthName = this.getMonthName(this.currentMonth);
        }
        else {
            this.currentMonth = month - 1;
            this.MonthName = this.getMonthName(this.currentMonth);
        }
        this.currentCalendarDate = new Date(this.currentYear, this.currentMonth, 1);
        this.numberOfDaysinMonth = this.GetNumberOfDaysInMonth(this.currentYear, this.currentMonth);
        this.firstDayOfMonth = this.GetFirstDayOfMonth();
        this.FullCalendarData = this.BuildWeekCalendar();
    }
    Calendar.prototype.GetNumberOfDaysInMonth = function (year, month) {
        var x = new Date(year, month + 1, 0);
        return Number(x.getDate());
    };
    Calendar.prototype.GetFirstDayOfMonth = function () {
        var day = this.currentCalendarDate.getDay();
        return day;
    };
    Calendar.prototype.BuildWeekCalendar = function () {
        var totalDaysInWeek = 7;
        var padding = 0;
        var dayCounter = 1;
        for (var i = 0; i < totalDaysInWeek; i++) {
            if (i === this.firstDayOfMonth) {
                this.WeekCalendarData.push(dayCounter);
                dayCounter++;
                break;
            }
            else {
                this.WeekCalendarData.push(padding);
            }
        }
        // get WeekCalendar Counter
        // Fill Remaining Array with the days
        var currentArrayCounter = this.WeekCalendarData.length;
        for (var x = 0; x < totalDaysInWeek - currentArrayCounter; x++) {
            this.WeekCalendarData.push(dayCounter);
            dayCounter++;
        }
        this.FullCalendarData.push(this.WeekCalendarData);
        while (dayCounter <= this.numberOfDaysinMonth) {
            var tempWeekData = [];
            for (var b = 0; b < totalDaysInWeek; b++) {
                // Add Days to Array
                if (dayCounter > this.numberOfDaysinMonth) {
                    break;
                }
                tempWeekData.push(dayCounter);
                dayCounter++;
            }
            this.FullCalendarData.push(tempWeekData);
        }
        if (this.FullCalendarData[this.FullCalendarData.length - 1].length < totalDaysInWeek) {
            while (this.FullCalendarData[this.FullCalendarData.length - 1].length < totalDaysInWeek) {
                this.FullCalendarData[this.FullCalendarData.length - 1].push(0);
            }
        }
        return this.FullCalendarData;
    };
    Calendar.prototype.forward = function () {
        var curMonth = this.currentMonth + 2;
        var curYear = this.currentYear;
        if (curMonth > 12) {
            curMonth = 0;
            curYear++;
        }
        return new Calendar(curYear, curMonth);
    };
    Calendar.prototype.previous = function () {
        var curMonth = this.currentMonth - 2;
        var curYear = this.currentYear;
        if (curMonth < 0) {
            curMonth = 12;
            curYear--;
        }
        return new Calendar(curYear, curMonth);
    };
    Calendar.prototype.getMonthName = function (month) {
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    };
    return Calendar;
}());
exports.Calendar = Calendar;
//# sourceMappingURL=CalendarLib.js.map