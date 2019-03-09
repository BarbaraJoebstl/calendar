import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MbEventService } from '../services/mbEvent.service';
import { CalendarActionType, AddMbEvent, AddMbEventSuccess, AddMbEventFail, LoadMbEventsSuccess, LoadMbEventsFail, LoadMbEvents} from '../actions/calendar.actions';
import { AppState } from 'src/app/app-state.model';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {catchError, finalize, map, switchMap, tap, mergeMap, withLatestFrom} from 'rxjs/operators';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { getEventList } from '../reducers/calendar.reducer';


@Injectable()
export class CalendarEffects {
    constructor(
        private actions$: Actions,
        private mbEventService: MbEventService,
        private store: Store<AppState>) {}
 
    @Effect()
    addEvent$ = this.actions$.pipe(
        ofType(CalendarActionType.ADD_MBEVENT),
        withLatestFrom(this.store.select(getEventList)),
        mergeMap(([action, events]) => {
            return this.mbEventService.addMbEvent(events).pipe(
                map(response => {return new AddMbEventSuccess}),
                catchError(error => of (new AddMbEventFail))
            );
    }));

    @Effect()
    saveEvent$ = this.actions$.pipe(
        ofType(CalendarActionType.SAVE_MBEVENT),
        map(() => new AddMbEvent())
    )


    @Effect()
    loadEvents$  = this.actions$.pipe(
        ofType(CalendarActionType.LOAD_MBEVENTS),
        mergeMap(() => {
            return this.mbEventService.loadEvents().pipe(
                map((result: any) => {
                    return new LoadMbEventsSuccess(result.response);
                }),
                catchError(error => of (new LoadMbEventsFail()))
            )
        })
    )    
    
}


/*
        //concatMap(payload => [
            
        ])

            return this.mbEventService.addMbEvent(newEvent).pipe(
                map((data) => {return new AddEventSuccess(data)}),
                catchError(error => of (new AddEventFail))
                // TODO hide loader
                //finalize(() => )
            )
        })
    ) 


    @Effect()
public signInSuccess$: Observable<Action> = this.actions$.pipe(
  ofType( 'SIGN_IN_SUCCESS' ),
  map( action => action.payload ),
  concatMap( payload => [
    new LoadDashboardData( payload.companyId ),
    new LoadChatData( payload.userId )
  ])
);
Th
    

    @Effect()
    addEvent$: Observable<Action> = this.actions$.pipe(
        ofType(CalenderActionType.ADD_MBEVENT_SUCCESS),

    )
    */

