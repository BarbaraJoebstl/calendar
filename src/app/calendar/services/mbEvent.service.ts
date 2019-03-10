import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MbEvent } from 'src/app/shared/models/mbEvent.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MbEventService {
 
  constructor(private readonly http: HttpClient) { }

  loadEvents(): Observable<MbEvent[]> {
    return this.http.get(`${environment.apiBaseUrl}/mbEvents`)
      // we need to transform the object values form jsonstore.io;
      .pipe(map(res => { 
        return Object.values(Object.values(res.result)); }
        )
      );
  }

 
  addMbEvent(newEvent: MbEvent): any {
    return this.http.post(`${environment.apiBaseUrl}/mbEvents/${newEvent.id}`, newEvent);
  }

  deleteMbEvent(eventId: string): any {
    return this.http.delete(`${environment.apiBaseUrl}/mbEvents/${eventId}`)
  }

}
