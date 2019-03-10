import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MbEventService } from '../services/mbEvent.service';
import { CalendarActionType, AddMbEvent, AddMbEventSuccess, AddMbEventFail, LoadMbEventsSuccess, LoadMbEventsFail, LoadMbEvents, DeleteMbEventSuccess, DeleteMbEventFail, DeleteMbEvent} from '../actions/calendar.actions';
import { AppState } from 'src/app/app-state.model';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {catchError, map, mergeMap, concatMap} from 'rxjs/operators';


@Injectable()
export class CalendarEffects {
    constructor(
        private actions$: Actions,
        private mbEventService: MbEventService,
        private store: Store<AppState>) {}
 
    @Effect()
    loadEvents$  = this.actions$.pipe(
        ofType<LoadMbEvents>(CalendarActionType.LOAD_MBEVENTS),
        mergeMap(() => {
            return this.mbEventService.loadEvents().pipe(
                map((result: any) => {
                    return new LoadMbEventsSuccess(result);
                }),
                catchError(error => of (new LoadMbEventsFail()))
            )
        })
    );
        
    @Effect()
    addEvent$ = this.actions$.pipe(
        ofType<AddMbEvent>(CalendarActionType.ADD_MBEVENT),
        concatMap( addEventAction => {
            return this.mbEventService.addMbEvent(addEventAction.payload).pipe(
                map(response => {return new AddMbEventSuccess}),
                catchError(error => of (new AddMbEventFail(addEventAction.payload)))
            );
        })
    );

    @Effect()
    deleteEvent$ = this.actions$.pipe(
        ofType<DeleteMbEvent>(CalendarActionType.DELETE_MBEVENT),
        concatMap( deleteEventAction => {
            return this.mbEventService.deleteMbEvent(deleteEventAction.payload).pipe(
                map(response => { return new DeleteMbEventSuccess}),
                catchError(error => of (new DeleteMbEventFail(deleteEventAction.payload)))
            )
        })
    );
}