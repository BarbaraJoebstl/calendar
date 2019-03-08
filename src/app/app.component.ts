import { Component, OnInit } from '@angular/core';
import { LoadMbEvents } from './calendar/actions/calendar.actions';
import { AppState } from './app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'calendar';

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.dispatch(new LoadMbEvents());
  }

}
