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


    public FullCalendarData: Array<Array<number>> = new Array<Array<number>>();

    constructor(year?: number, month?: number ){

        if (year === undefined){
            year = this.today.getFullYear();
            this.currentYear = year;
        } else {
            this.currentYear = year;
        }

        if (month === undefined) {
            month = this.today.getMonth();
            this.currentMonth = month - 1;
            this.MonthName = Month[month - 1];

        } else {
            this.currentMonth = month - 1;
            this.MonthName = Month[month - 1];
        }

        this.currentCalendarDate = new Date(this.currentYear, this.currentMonth, 1);

        this.numberOfDaysinMonth = this.GetNumberOfDaysInMonth(this.currentYear, this.currentMonth);
        this.firstDayOfMonth = this.GetFirstDayOfMonth();

        this.FullCalendarData = this.BuildWeekCalendar();

    }


    public GetNumberOfDaysInMonth(year: number, month: number): number {
        let x =  new Date(year, month + 1, 0);
        return Number(x.getDate());
    }

    public GetFirstDayOfMonth(): number{
        let day = this.currentCalendarDate.getDay();
        return day;
    }

    private BuildWeekCalendar(): Array<Array<number>>{
        let totalDaysInWeek = 7;
        let padding = 0;
        let dayCounter = 1;

        for (let i = 0; i < totalDaysInWeek; i++){
            if (i === this.firstDayOfMonth){
                this.WeekCalendarData.push(dayCounter);
                dayCounter++;
                break;
            }
            else{
                this.WeekCalendarData.push(padding);
            }
        }
        
        // get WeekCalendar Counter
       // Fill Remaining Array with the days
       var currentArrayCounter = this.WeekCalendarData.length;
       
       for(let x = 0; x < totalDaysInWeek - currentArrayCounter; x++){
           this.WeekCalendarData.push(dayCounter);
           dayCounter++;
       }
       
       this.FullCalendarData.push(this.WeekCalendarData);
       
       while(dayCounter <= this.numberOfDaysinMonth){
            let tempWeekData: Array<number> = [];
            
            for(let b = 0; b < totalDaysInWeek; b++){
                // Add Days to Array
                if (dayCounter > this.numberOfDaysinMonth){
                    break;
                }
                tempWeekData.push(dayCounter);
                dayCounter++;
            }
            this.FullCalendarData.push(tempWeekData);
       }
       if (this.FullCalendarData[this.FullCalendarData.length -1].length < totalDaysInWeek){
           while(this.FullCalendarData[this.FullCalendarData.length -1].length < totalDaysInWeek){
               this.FullCalendarData[this.FullCalendarData.length -1].push(0);
           }
       }
       
       
       return this.FullCalendarData;
    }

    public forward(): Calendar {
        let curMonth = this.currentMonth++;
        let curYear = this.currentYear;


        if (curMonth > 12){
            curMonth = 0;
            curYear++;
        }

        return new Calendar(curYear, curMonth);
    }

    public previous(): Calendar {
        let curMonth = this.currentMonth--;
        let curYear = this.currentYear;


        if (curMonth < 0){
            curMonth = 12;
            curYear--;
        }

        return new Calendar(curYear, curMonth);
    }

}




