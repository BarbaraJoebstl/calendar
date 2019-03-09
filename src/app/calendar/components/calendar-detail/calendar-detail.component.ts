import { Component, OnInit, Input } from '@angular/core';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';

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
 
  constructor() { }

  delete(eventid: string) {
    // TODO Impl.
    //this.store.dispatch(new)
  }

}
