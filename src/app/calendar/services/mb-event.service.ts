import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonStoreObject } from '../models/jsonStoreObject.model';
import { MbEvent } from '../models/mbEvent.model';

@Injectable({
  providedIn: 'root'
})

export class MbEventService {
 
  constructor(private readonly http: HttpClient) { }

  loadEvents(): Observable<MbEvent[]> {
    return this.http.get(`${environment.apiBaseUrl}`)
      // we need to transform the object values from jsonstore.io;
      .pipe(map((res: JsonStoreObject) => { 
        return Object.values(Object.values(res.result)); }
        )
      );
  }

  addMbEvent(newEvent: MbEvent) {
    return this.http.post(`${environment.apiBaseUrl}${newEvent.id}`, newEvent);
  }

  deleteMbEvent(eventId: string) {
    return this.http.delete(`${environment.apiBaseUrl}${eventId}`)
  }

}
