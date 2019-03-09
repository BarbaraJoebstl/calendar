import { Injectable } from '@angular/core';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';

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

  public static filterEventsForCurrentMonth(year, month, list): MbEvent[] {
    month +=1;
    const timestampToCompare: RegExp = new RegExp(`^${year}-${month}`);



    if (list) {
      const filtered = list.filter(listelement => timestampToCompare.test(listelement.date));
      console.log(list);
      console.log(timestampToCompare);
      console.log(filtered);
      return filtered;
    }
  }

  public static filterEventsForCurrentDay(year, month, day, list): MbEvent[] {
    month +=1;
    var timestampToCompare = `${year}-${month}-${day}`;

    if (list) {
      return  list.filter(listelement => listelement.date === timestampToCompare);;
    }
  }

}
