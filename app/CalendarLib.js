define(["require", "exports", "./index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Calendar {
        constructor(year, month) {
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
            this.numberOfDaysinMonth = this.GetNumberOfDaysInMonth(this.currentYear, this.currentMonth);
            this.firstDayOfMonth = this.GetFirstDayOfMonth();
            this.FullCalendarData = this.BuildWeekCalendar();
        }
        GetNumberOfDaysInMonth(year, month) {
            let x = new Date(year, month + 1, 0);
            return Number(x.getDate());
        }
        GetFirstDayOfMonth() {
            let day = this.currentCalendarDate.getDay();
            return day;
        }
        BuildWeekCalendar() {
            let totalDaysInWeek = 7;
            let padding = 0;
            let dayCounter = 1;
            for (let i = 0; i < totalDaysInWeek; i++) {
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
            for (let x = 0; x < totalDaysInWeek - currentArrayCounter; x++) {
                this.WeekCalendarData.push(dayCounter);
                dayCounter++;
            }
            this.FullCalendarData.push(this.WeekCalendarData);
            while (dayCounter <= this.numberOfDaysinMonth) {
                let tempWeekData = [];
                for (let b = 0; b < totalDaysInWeek; b++) {
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
        }
        forward() {
            let curMonth = this.currentMonth++;
            let curYear = this.currentYear;
            if (curMonth > 12) {
                curMonth = 0;
                curYear++;
            }
            return new Calendar(curYear, curMonth);
        }
        previous() {
            let curMonth = this.currentMonth--;
            let curYear = this.currentYear;
            if (curMonth < 0) {
                curMonth = 12;
                curYear--;
            }
            return new Calendar(curYear, curMonth);
        }
    }
    exports.Calendar = Calendar;
});
//# sourceMappingURL=CalendarLib.js.map