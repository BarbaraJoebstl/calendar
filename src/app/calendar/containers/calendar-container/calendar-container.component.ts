import { Component } from '@angular/core';
import { getSelectedYear, getSelectedMonth, getSelectedDay, getSelectedWeekday } from '../../reducers/calendar.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state.model';

@Component({
  selector: 'mb-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent {

  selectedYear$: Observable<number> = this.store.pipe(select(getSelectedYear));
  selectedMonth$: Observable<number> = this.store.pipe(select(getSelectedMonth));
  selectedDay$: Observable<number> = this.store.pipe(select(getSelectedDay));
  selectedWeekday$: Observable<number> = this.store.pipe(select(getSelectedWeekday));
  
  constructor(private store: Store<AppState>) { }
  
}
