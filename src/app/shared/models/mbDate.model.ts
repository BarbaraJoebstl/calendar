import { MbEvent } from './mbEvent.model';

export interface MbDate {
    date: string;
    mbEntries: MbEvent[]; 
}