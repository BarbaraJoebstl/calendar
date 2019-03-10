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

  loadEvents(): Observable<MbEvent[]> {
    return this.http.get<MbEvent[]>(`${environment.apiBaseUrl}/mbEvents`);
  }

  addMbEvent(newEvents: MbEvent[]): any {
    return this.http.post(`${environment.apiBaseUrl}/mbEvents`, newEvents);
  }

  deleteMbEvent(eventId: string): any {
    return this.http.delete(`${environment.apiBaseUrl}/mbEvents`)
  }

}
