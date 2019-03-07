import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-calendar-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.scss']
})
export class CalendarMainComponent implements OnInit {

  constructor() { }
  // TODO service function in reducer
   //  add as initial state to store
   months: string[] = ['Jan, Feb, Mar, April, May, June, July', '...'];
   days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   weeks: number[][] = new Array();
   firstDayOfMonth: number;
   numberOfDaysInMonth: number;

  ngOnInit() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    this.firstDayOfMonth = (new Date(currentYear, currentMonth).getDay());
    this.numberOfDaysInMonth = this.getNumberOfDays(currentYear, currentMonth);
    this.createWeekDays();
    console.log(this.weeks);
  }

  /**
   * used to get the number of days in a month, depending on 
   * @param year 
   * @param month 
   */
  getNumberOfDays(year, month): number {
    return (32 - new Date(year, month, 32).getDate());
  }

  /**
   * used to create a multidimensional array, holding the days of the current month
   * example March 2019
   *      sun, mon ... sat
   * (7) [0, 0, 0, 0, 0, 1, 2]
   * (7) [3, 4, 5, 6, 7, 8, 9]
   * (7) [10, 11, 12, 13, 14, 15, 16]
   * (7) [17, 18, 19, 20, 21, 22, 23]
   * (7) [24, 25, 26, 27, 28, 29, 30]
   * (7) [31]
   * 
   */
  createWeekDays(): void {
    let day = 1;
    for (let i = 0; i < 6; i++) {
      this.weeks.push([]);
      for (let j = 0; j < 7; j++) {
        if(i === 0 && j < this.firstDayOfMonth) {
          this.weeks[i].push(0);
        } else if (day > this.numberOfDaysInMonth){
          // todo start again with numbers... but for next month until current loop is done
          break;
        } else {
          this.weeks[i].push(day);
          // todo check if date is current date and add extra styling;
          day++;
        }
      }
    }
  }


  selectMonth(): void {
   
  }
}
