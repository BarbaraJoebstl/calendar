import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';

@Injectable({
  providedIn: 'root'
})

export class MbEventService {

  constructor(private readonly http: HttpClient) { }

  getMbEventsForYear(year: number): Observable<MbEvent[]>{
    return this.http.get<MbEvent[]>(`${environment.apiBaseUrl}/year/${year}`);
  }

  addMbEvent(newEvent: MbEvent): void {
    //return this.http.post<>
  }
}
