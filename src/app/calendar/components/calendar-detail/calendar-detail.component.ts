import { Component, OnInit, Input } from '@angular/core';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { RemoveMbEvent } from '../../actions/calendar.actions';

@Component({
  selector: 'mb-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss']
})
export class CalendarDetailComponent {

  @Input() 
  selectedDay: number;
  @Input()
  selectedWeekday: number;
  @Input()
  eventsForDay: MbEvent[];
 
  constructor(private readonly store: Store<AppState>) { }

  delete(eventid: string) {
    this.store.dispatch(new RemoveMbEvent(eventid));
  }

}
