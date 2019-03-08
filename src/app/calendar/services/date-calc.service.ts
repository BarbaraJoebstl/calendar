import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCalcService {

  constructor() { }

  /**
   * 
   * used to calc the weekday of the currently selected day
   * @param year 
   * @param month 
   * @param day 
   */
  public static calcCurrentWeekday(year: number, month: number, day: number) : number {
    
    month += 1; // because we normally work with values from 0-11, caused by JS day()
    return new Date(`${year}-${month}-${day}`).getDay();
  }

}
