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
    readonly CurrentMonth: number;
    readonly CurrentYear: number;
    FullCalendarData: Array<Array<number>>;
    constructor(year?: number, month?: number, offsetApplied?: boolean);
    GetNumberOfDaysInMonth(year: number, month: number): number;
    GetFirstDayOfMonth(): number;
    private BuildWeekCalendar;
    next(): Calendar;
    previous(): Calendar;
    private getMonthName;
    getWeekData(selectedDate?: number): Array<number> | null;
}
