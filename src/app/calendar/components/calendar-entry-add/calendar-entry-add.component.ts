import { Component, OnInit, Input } from '@angular/core';
import { AddMbEvent } from '../../actions/calendar.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.model';
import { MbEventService } from '../../services/mbEvent.service';

@Component({
  selector: 'mb-calendar-entry-add',
  templateUrl: './calendar-entry-add.component.html',
  styleUrls: ['./calendar-entry-add.component.scss']
})
export class CalendarEntryAddComponent implements OnInit {

  @Input()
  selectedDateAsString: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addEvent(newEventDesc: string): void {
    
    // id should be generated on the backend. For now we use mock ik
    let randomId = 3
    let mbEvent = new MbEvent(randomId, this.selectedDateAsString, newEventDesc);
    this.store.dispatch(new AddMbEvent(mbEvent));
  }

}
