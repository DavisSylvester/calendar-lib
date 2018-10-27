export declare class Calendar {
    private today;
    private currentDate;
    private currentCalendarDate;
    private currentYear;
    private currentMonth;
    private numberOfDaysinMonth;
    private firstDayOfMonth;
    private WeekCalendarData;
    MonthName: string;
    FullCalendarData: Array<Array<number>>;
    constructor(year?: number, month?: number);
    GetNumberOfDaysInMonth(year: number, month: number): number;
    GetFirstDayOfMonth(): number;
    private BuildWeekCalendar;
    forward(): Calendar;
    previous(): Calendar;
    private getMonthName;
}
