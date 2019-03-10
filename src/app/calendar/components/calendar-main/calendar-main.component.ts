import { Component, Input } from '@angular/core';
import { ChangeMonth, ChangeDay, ChangeYear } from '../../actions/calendar.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { MbEvent } from '../../models/mbEvent.model';

@Component({
  selector: 'mb-calendar-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.scss']
})
export class CalendarMainComponent {

  @Input()
  selectedDay: number;
  @Input()
  selectedMonth: number;
  @Input()
  selectedYear: number;
  @Input()
  eventsForMonth: MbEvent[];

  weekdayArray: number[][];
  months = new Map([
    // start the keys with 0 because of the JS date object
    [0, 'Jan'],
    [1, 'Feb'],
    [2, 'Mar'],
    [3, 'Apr'],
    [4, 'May'],
    [5, 'Jun'],
    [6, 'Jul'],
    [7, 'Aug'],
    [8, 'Sep'],
    [9, 'Oct'],
    [10, 'Nov'],
    [11, 'Dec']
  ]);
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  constructor(private readonly store: Store<AppState>) {}

  ngOnChanges(): void {
    this.weekdayArray = this.createWeekdayArray(this.selectedYear, this.selectedMonth);
  }

  changeYear(count: number): void {
    let year = this.selectedYear + count;
    this.store.dispatch(new ChangeYear(year));
  }

  changeMonth(month: number): void {
    this.store.dispatch(new ChangeMonth(month));
  }

  changeDay(day: any) : void {
    day.length === 0 ? alert('Please select a date') : this.store.dispatch(new ChangeDay(day));
  }

/**
 * used to create a two dimensional array for the week of the current month
 *  
 * @param year 
 * @param month 
 */

  createWeekdayArray(year: number, month: number): any {
    let day = 1;
    let weeks: any[][] = Array();

    let firstDayOfMonth = this.getWeekdayOfFirstDayOfMonth(year, month);
    let numberOfDaysInMonth = this.getNumberOfDays(year, month);

    // weeks of the month
    for (let i = 0; i < 6; i++) {
      weeks.push([]);
      // days of a week
      for (let j = 0; j < 7; j++) {
        if(i === 0 && j < firstDayOfMonth) {
          // add placeholders if week does not start on a sunday
          weeks[i].push('');
        } else if (day > numberOfDaysInMonth){
          // add placeholders for the rest of the last week
          weeks[i].push('');
        } else {
          weeks[i].push(day);
          day++;
        }
      }
    }
    return weeks;
  }

  private getNumberOfDays(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  /**
   * used to get the weekday of the first day of selected month in selected year
   *
   * @param year 
   * @param month 
   * 
   * returns an int form 0 (= sunday) to 6 (= saturday)
   */

 private getWeekdayOfFirstDayOfMonth(year: number, month: number): number {
    return (new Date(year, month).getDay());
  }

  private hasEvent(day: number): boolean {
    if(this.eventsForMonth) {
      return this.eventsForMonth.filter(event => event.day === day).length >= 1 ? true: false;
    }
    return false;}

  
  private isToday(day: number): boolean {
    let month = this.selectedMonth + 1;
    let today = new Date().toISOString().slice(0,10).replace(/(^|-)0+/g, "$1");
   
    return `${this.selectedYear}-${month}-${day}` === today ? true: false;
  }  

}
