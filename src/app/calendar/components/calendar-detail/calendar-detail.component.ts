import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { DeleteMbEvent } from '../../actions/calendar.actions';
import { MbEvent } from '../../models/mbEvent.model';

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
    this.store.dispatch(new DeleteMbEvent(eventid));
  }

}
