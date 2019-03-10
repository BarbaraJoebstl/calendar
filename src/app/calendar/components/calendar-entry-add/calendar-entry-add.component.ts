import { Component, Input } from '@angular/core';
import { AddMbEvent } from '../../actions/calendar.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { MbEvent } from '../../models/mbEvent.model';

@Component({
  selector: 'mb-calendar-entry-add',
  templateUrl: './calendar-entry-add.component.html',
  styleUrls: ['./calendar-entry-add.component.scss']
})
export class CalendarEntryAddComponent {

  @Input()
  selectedDay: number;
  @Input()
  selectedMonth: number;
  @Input()
  selectedYear: number;

  newEvent: string;

  constructor(private store: Store<AppState>) { }

  addEvent(newEventDesc: string): void {
    if(!newEventDesc) {
      return;
    }
    // id should be generated on the backend. For now we generate it here
    let uuid = this.generateEventId();
    let monthTS = this.selectedMonth + 1;

    let mbEvent: MbEvent = ({
      id: uuid, 
      year: this.selectedYear,
      month: this.selectedMonth, 
      day: this.selectedDay, 
      date: `${this.selectedYear}-${monthTS}-${this.selectedDay}`,
      description: newEventDesc
    });
    
      this.store.dispatch(new AddMbEvent(mbEvent));
  }

  private generateEventId() : string {
      const random = Math.random().toString(36).substr(2, 9);
      return `event-${random}`;
  }
}
