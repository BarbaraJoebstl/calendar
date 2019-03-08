import { MbEvent } from './mbEvent.model';

export interface MbDate {
    date: string;
    isSelected: boolean;
    isToday: boolean;
    mbEntries: MbEvent[]; 
}