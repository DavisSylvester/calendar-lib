import { Month } from "./index";

export class Calendar {

    private today: Date = new Date();
    private currentDate: Date;
    private currentCalendarDate: Date;
    private currentYear: number;
    private currentMonth: number;
    private numberOfDaysinMonth: number;
    private firstDayOfMonth: number;
    private WeekCalendarData: Array<number> = new Array<number>();
    public MonthName: string;

    get CurrentMonth() {
        return this.currentMonth + 1;
    }

    get CurrentYear() {
        return this.currentYear;
    }


    public FullCalendarData: Array<Array<number>> = new Array<Array<number>>();

    constructor(year: number = null, month: number = null, offsetApplied = false) {

        if (!offsetApplied) {
            if (year === null) {
                year = this.today.getFullYear();
                this.currentYear = year;
            } else {
                this.currentYear = year;
            }

            if (month === null) {
                month = this.today.getMonth();
                this.currentMonth = month;
                this.MonthName = this.getMonthName(this.currentMonth);


            } else {
                this.currentMonth = month - 1;
                this.MonthName = this.getMonthName(this.currentMonth);

            }

        } else {

            this.currentMonth = month;
            this.currentYear = year;
            this.MonthName = this.getMonthName(this.currentMonth);
        }

        this.currentCalendarDate = new Date(this.currentYear, this.currentMonth, 1);

        this.numberOfDaysinMonth = this.GetNumberOfDaysInMonth(this.currentYear, this.currentMonth);
        this.firstDayOfMonth = this.GetFirstDayOfMonth();

        this.FullCalendarData = this.BuildWeekCalendar();

    }


    public GetNumberOfDaysInMonth(year: number, month: number): number {
        let x = new Date(year, month + 1, 0);
        return Number(x.getDate());
    }

    public GetFirstDayOfMonth(): number {
        let day = this.currentCalendarDate.getDay();
        return day;
    }

    private BuildWeekCalendar(): Array<Array<number>> {
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
        let currentArrayCounter = this.WeekCalendarData.length;

        for (let x = 0; x < totalDaysInWeek - currentArrayCounter; x++) {
            this.WeekCalendarData.push(dayCounter);
            dayCounter++;
        }

        this.FullCalendarData.push(this.WeekCalendarData);

        while (dayCounter <= this.numberOfDaysinMonth) {
            let tempWeekData: Array<number> = [];

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

    public next(): Calendar {
        this.currentMonth += 2;
        let curMonth = this.currentMonth;
        // let curMonth = this.currentMonth + 2;
        let curYear = this.currentYear;


        if (curMonth > 12) {
            curMonth = 0;
            curYear++;
            this.currentMonth = curMonth;
            this.currentYear = curYear;

            return new Calendar(curYear, curMonth, true);
        }

        return new Calendar(curYear, curMonth, true);
    }

    public previous(): Calendar {

        let curMonth = this.currentMonth;
        let curYear = this.currentYear;


        if (curMonth <= 0) {

            curMonth = 11;
            curYear--;
            this.currentMonth = curMonth;
            this.currentYear = curYear;

            this.MonthName = this.getMonthName(this.currentMonth);

            return new Calendar(curYear, curMonth, true);
        }

        curMonth--;
        this.currentMonth = curMonth;
        this.currentYear = curYear;
        return new Calendar(curYear, curMonth, true);
    }

    private getMonthName(month: number): string {

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
    }

    public getWeekData(selectedDate: number = null): Array<number> | null {

        if (selectedDate === null) {
            selectedDate = new Date().getDate();
        }

        for (let i = 0; i < this.FullCalendarData.length; i++) {

            for (let x = 0; x < this.FullCalendarData[i].length; x++) {

                if (this.FullCalendarData[i][x] === selectedDate) {
                    return this.FullCalendarData[i];
                }
            }
        }

        return null;
    }

}




