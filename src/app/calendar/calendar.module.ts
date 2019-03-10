// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { CalendarContainerComponent } from './containers/calendar-container/calendar-container.component';
import { CalendarDetailComponent } from './components/calendar-detail/calendar-detail.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { CalendarEntryAddComponent } from './components/calendar-entry-add/calendar-entry-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../app.reducers';
import { CalendarEffects } from './effects/calendar.effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';


export const COMPONENTS = [
  CalendarContainerComponent,
  CalendarDetailComponent,
  CalendarMainComponent,
  CalendarEntryAddComponent
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [CalendarContainerComponent],
  imports: [
    // Angular
    CommonModule,
    BrowserModule,
    HttpClientModule,
    // NgRx
    StoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forFeature([CalendarEffects]),
  ],
  providers: []
})
export class CalendarModule {

}
