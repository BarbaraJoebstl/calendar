import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarContainerComponent } from './calendar/containers/calendar-container/calendar-container.component';
import { CalendarEntryAddComponent } from './calendar/components/calendar-entry-add/calendar-entry-add.component';
import { CalendarDetailComponent } from './calendar/components/calendar-detail/calendar-detail.component';
import { CalendarMainComponent } from './calendar/components/calendar-main/calendar-main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffects } from '../app/calendar/effects/calendar.effect';
import { appReducers } from './app.reducers';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    CalendarContainerComponent,
    CalendarEntryAddComponent,
    CalendarDetailComponent,
    CalendarMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CalendarEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
