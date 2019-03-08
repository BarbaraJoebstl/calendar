import { Component, Input } from '@angular/core';
import { ChangeMonth, ChangeDay, ChangeYear } from '../../actions/calendar.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';

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


  crazyArray: number[][];

  months = new Map([
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
    [11, 'Dez']
  ]);

   // needed for ux 
   days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  constructor(private readonly store: Store<AppState>) {}

  ngOnChanges(): void {
    this.crazyArray = this.createWeekdayArray(this.selectedYear, this.selectedMonth);
  }

  changeYear(count: number): void {
    let year = this.selectedYear + count;
    this.store.dispatch(new ChangeYear(year));
  }

  changeMonth(month: number): void {
    this.store.dispatch(new ChangeMonth(month));
  }

  changeDay(day: number) : void {
    this.store.dispatch(new ChangeDay(day));
  }

  isToday(day: number): boolean {
    let month = this.selectedMonth + 1;
     return `${this.selectedYear}-${month}-${day}` === new Date().toISOString().slice(0,10) ? true : false;
  }

/**
 * used to create a two dimensional array for the week of the current month
 *  
 * @param year 
 * @param month 
 */

  createWeekdayArray(year: number, month: number): any {
    let day = 1;
    let weeks: number[][] = Array();

    let firstDayOfMonth = this.getWeekdayOfFirstDayOfMonth(year, month);
    let numberOfDaysInMonth = this.getNumberOfDays(year, month);

    // weeks of the month
    for (let i = 0; i < 6; i++) {
      weeks.push([]);
      // days of a week
      for (let j = 0; j < 7; j++) {
        if(i === 0 && j < firstDayOfMonth) {
          // create empty fields if week does not start on a sunday
          continue;
        } else if (day > numberOfDaysInMonth){
          // Todo start again with numbers... but for next month until current loop is done
          break;
        } else {
          weeks[i].push(day);
          day++;
        }
      }
    }
    return weeks;
  }

  /**
   * used to get the number of days in a month, depending on 
   * 
   * TODO explain magin number
   * @param year 
   * @param month 
   */
  private getNumberOfDays(year: number, month: number): number {
    return (32 - new Date(year, month, 32).getDate());
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

}
