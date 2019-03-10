import { CalendarActions, CalendarActionType } from '../actions/calendar.actions';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DateCalcService } from '../services/date-calc.service';

export interface CalendarState {
    selectedYear: number,
    selectedMonth: number;
    selectedDay: number;
    events: MbEvent[];
}

const today = new Date();
export const initialCalendarState: CalendarState = {
    selectedYear: today.getFullYear(),
    selectedMonth: today.getMonth(), // int 0 - 11
    selectedDay: today.getDate(),
    events: []
}

export function calendarReducer(state: CalendarState = initialCalendarState, action: CalendarActions): CalendarState {
    switch (action.type) {
        case CalendarActionType.LOAD_MBEVENTS:
            return {
                ...state,
            };
        case CalendarActionType.LOAD_MBEVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload !== null ? action.payload : []
            };
        case CalendarActionType.LOAD_MBEVENTS_FAIL:
        return {
            ...state
        };
        case CalendarActionType.SELECT_YEAR:
        return{
            ...state,
            selectedYear: action.payload
        };
        case CalendarActionType.SELECT_MONTH:
        return {
            ...state,
            selectedMonth: action.payload
        }
        case CalendarActionType.SELECT_DAY:
        return {
            ...state,
            selectedDay:  action.payload,
        }
        case CalendarActionType.ADD_MBEVENT:
        return {
            ...state,
        }
        case CalendarActionType.SAVE_MBEVENT:
        return {
            ...state,
            events: state.events ? [...state.events, action.payload] : new Array(action.payload)
        }
        case CalendarActionType.REMOVE_MBEVENT:
        return {
            ...state,
            events: state.events.filter((mbEvent) => mbEvent.id !== action.payload)
        }
        case CalendarActionType.DELETE_MBEVENT_FAIL:
        return {
            ...state,
            //events: [...state.events, action.payload]
        }

        default:
            return state;
    }
}

export const selectCalendarState = createFeatureSelector<CalendarState>('calendar');

export const getSelectedYear = createSelector(selectCalendarState, (state: CalendarState) => state.selectedYear);
export const getSelectedMonth = createSelector(selectCalendarState, (state: CalendarState) => state.selectedMonth);
export const getSelectedDay = createSelector(selectCalendarState, (state: CalendarState) => state.selectedDay);

export const getSelectedWeekday = createSelector(getSelectedYear, getSelectedMonth, getSelectedDay, (year, month, day) => 
    DateCalcService.calcCurrentWeekday(year, month, day));

export const getEventList = createSelector(selectCalendarState, (state: CalendarState) => state.events);  

export const getEventsForSelectedMonth = createSelector(getSelectedYear, getSelectedMonth, getEventList, (year, month, list) =>
    DateCalcService.filterEventsForCurrentMonth(year, month, list));

export const getEventsForSelectedDay = createSelector(getSelectedYear, getSelectedMonth, getSelectedDay, getEventList, (year, month, day, list) =>
    DateCalcService.filterEventsForCurrentDay(year, month, day, list));

export const getSelectedDateAsString = createSelector(getSelectedYear, getSelectedMonth, getSelectedDay, (year, month, day) =>
{
    month += 1;
    return `${year}-${month}-${day}`
})    