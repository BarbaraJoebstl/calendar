import { Action } from '@ngrx/store';
import { MbEvent } from '../../shared/models/mbEvent.model';

export enum CalendarActionType {
    LOAD_MBEVENTS = '[Load] MbEvents',
    LOAD_MBEVENTS_SUCCESS = '[Load] MbEvents Success',
    LOAD_MBEVENTS_FAIL = '[Load] MbEvents Fail',
    SELECT_DATE = '[Select] Date',
    ADD_MBEVENT = '[Add] MbEvent'
}

export class LoadMbEvents implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS;
}

export class LoadMbEventsSuccess implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS_SUCCESS;
    constructor (public payload: MbEvent[]) {};
}

export class LoadMbEventsFail implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS_FAIL;
}

export class SelectDate implements Action {
    public readonly type = CalendarActionType.SELECT_DATE;
    constructor(public payload: string) {};
}

export class AddMbEvent implements Action {
    public readonly type = CalendarActionType.ADD_MBEVENT;
    constructor (public payload: MbEvent) {};
}

export type CalendarActions = LoadMbEvents 
    | LoadMbEventsSuccess
    | LoadMbEventsFail
    | SelectDate
    | AddMbEvent