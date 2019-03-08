import { CalendarActions, CalendarActionType } from '../actions/calendar.actions';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DateCalcService } from '../services/date-calc.service';

export interface CalendarState {
    selectedYear: number,
    selectedMonth: number;
    selectedDay: number;
    eventsForSelectedYear: MbEvent[] | null;
}

const today = new Date();
export const initialCalendarState: CalendarState = {
    selectedYear: today.getFullYear(),
    selectedMonth: today.getMonth(), // int 0 - 11
    selectedDay: today.getDate(),
    eventsForSelectedYear: []
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
                eventsForSelectedYear: action.payload
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

export const getSelectedWeekday = createSelector(getSelectedYear, getSelectedMonth, getSelectedDay, (year, month, day) => 
    DateCalcService.calcCurrentWeekday(year, month, day));

export const getSelectedDateAsString = createSelector(getSelectedYear, getSelectedMonth, getSelectedDay, (year, month, day) =>
{
    month += 1;
    return `${year}-${month}-${day}`
})    