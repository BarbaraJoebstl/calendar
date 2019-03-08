import { CalendarActions, CalendarActionType } from '../actions/calendar.actions';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CalendarState {
    selectedYear: number,
    selectedMonth: number;
    selectedDay: number;
    selectedWeekday: number;
    eventsForSelectedYear: MbEvent[] | null;
}

const today = new Date();
export const initialCalendarState: CalendarState = {
    selectedYear: today.getFullYear(),
    selectedMonth:  today.getMonth(),
    selectedDay: today.getDate(),
    selectedWeekday: today.getDay(),
    eventsForSelectedYear: []
}

export function calendarReducer(state: CalendarState = initialCalendarState, action: CalendarActions): CalendarState {
    switch (action.type) {
        case CalendarActionType.LOAD_MBEVENTS:
            return {
                ...state
            };
        case CalendarActionType.LOAD_MBEVENTS_SUCCESS:
            return {
                ...state,
                eventsForSelectedYear: action.payload
            };
        case CalendarActionType.LOAD_MBEVENTS_FAIL:
        return {
            ...state
        };
        case CalendarActionType.SELECT_DATE:
        return{
            ...state
        };
        case CalendarActionType.ADD_MBEVENT:
        return {
            ...state
        }
        default:
            return state;
    }
}

export const selectCalendarState = createFeatureSelector<CalendarState>('calendar');

export const getSelectedYear = createSelector(selectCalendarState, (state: CalendarState) => state.selectedYear);
export const getSelectedMonth = createSelector(selectCalendarState, (state: CalendarState) => state.selectedMonth);
export const getSelectedDay = createSelector(selectCalendarState, (state: CalendarState) => state.selectedDay);
export const getSelectedWeekday = createSelector(selectCalendarState, (state: CalendarState) => state.selectedWeekday);