import { Action } from '@ngrx/store';
import { MbEvent } from '../../shared/models/mbEvent.model';

export enum CalendarActionType {
    LOAD_MBEVENTS = '[Load] MbEvents',
    LOAD_MBEVENTS_SUCCESS = '[Load] MbEvents Success',
    LOAD_MBEVENTS_FAIL = '[Load] MbEvents Fail',

    SELECT_YEAR = '[Select] Year',
    SELECT_MONTH = '[Select] Month',
    SELECT_DAY = '[Select] Day',

    ADD_MBEVENT = '[Add] MbEvent',
    ADD_MBEVENT_SUCCESS = '[Add] Mb Event Success',
    ADD_MBEVENT_FAIL = '[Add] Mb Event Fail',
    SAVE_MBEVENT = '[Save] Mb Event'
}

export class LoadMbEvents implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS;
    constructor (public payload?: number) {};
}

export class LoadMbEventsSuccess implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS_SUCCESS;
    constructor (public payload: MbEvent[]) {};
}

export class LoadMbEventsFail implements Action {
    public readonly type = CalendarActionType.LOAD_MBEVENTS_FAIL;
}

export class ChangeYear implements Action {
    public readonly type = CalendarActionType.SELECT_YEAR;
    constructor(public payload: number) {};
}

export class ChangeMonth implements Action {
    public readonly type = CalendarActionType.SELECT_MONTH;
    constructor(public payload: number) {};
}

export class ChangeDay implements Action {
    public readonly type = CalendarActionType.SELECT_DAY;
    constructor(public payload: number) {};
}

export class SaveMbEvent implements Action {
    public readonly type = CalendarActionType.SAVE_MBEVENT;
    constructor (public payload: MbEvent) {};
}

export class AddMbEvent implements Action {
    public readonly type = CalendarActionType.ADD_MBEVENT;
    constructor () {};
}

export class AddMbEventSuccess implements Action {
    public readonly type = CalendarActionType.ADD_MBEVENT_SUCCESS;
    constructor () {};
}

export class AddMbEventFail implements Action {
    public readonly type = CalendarActionType.ADD_MBEVENT_FAIL;
}
export type CalendarActions = LoadMbEvents 
    | LoadMbEventsSuccess
    | LoadMbEventsFail
    | ChangeYear
    | ChangeMonth
    | ChangeDay
    | AddMbEvent
    | AddMbEventSuccess
    | AddMbEventFail
    | SaveMbEvent