"use strict";
var index_1 = require("./index");
var Calendar = (function () {
    function Calendar(year, month) {
        this.today = new Date();
        this.WeekCalendarData = new Array();
        this.FullCalendarData = new Array();
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
            this.MonthName = index_1.Month[month - 1];
        }
        else {
            this.currentMonth = month - 1;
            this.MonthName = index_1.Month[month - 1];
        }
        this.currentCalendarDate = new Date(this.currentYear, this.currentMonth, 1);
        // console.log('Working Month: ' + this.currentCalendarDate);
        this.numberOfDaysinMonth = this.GetNumberOfDaysInMonth(this.currentYear, this.currentMonth);
        this.firstDayOfMonth = this.GetFirstDayOfMonth();
        this.FullCalendarData = this.BuildWeekCalendar();
        // this.MonthName = Month[month - 1];
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
    Calendar.prototype.Advance = function () {
    };
    return Calendar;
}());
exports.Calendar = Calendar;
//# sourceMappingURL=CalendarLib.js.map