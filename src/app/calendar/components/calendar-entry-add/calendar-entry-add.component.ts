import { Component, OnInit, Input } from '@angular/core';
import { SaveMbEvent } from '../../actions/calendar.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { MbEvent } from '../../../shared/models/mbEvent.model';

@Component({
  selector: 'mb-calendar-entry-add',
  templateUrl: './calendar-entry-add.component.html',
  styleUrls: ['./calendar-entry-add.component.scss']
})
export class CalendarEntryAddComponent implements OnInit {

  @Input()
  selectedDay: number;
  @Input()
  selectedMonth: number;
  @Input()
  selectedYear: number;

  newEvent: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  getEvent(): void {
    //this.store.dispatch()
  }

  addEvent(newEventDesc: string): void {
    // id should be generated on the backend. For now we generate it here
    let uuid = this.generateUUID();
    let monthTS = this.selectedMonth + 1;

    let mbEvent: MbEvent = ({
      id: uuid, 
      year: this.selectedYear,
      month: this.selectedMonth, 
      day: this.selectedDay, 
      date: `${this.selectedYear}-${monthTS}-${this.selectedDay}`,
      description: newEventDesc});

      this.store.dispatch(new SaveMbEvent(mbEvent));
  }

  private generateUUID() : string {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
  }
}
