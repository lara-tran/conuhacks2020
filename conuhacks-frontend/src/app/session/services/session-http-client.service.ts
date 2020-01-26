import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpClientService {

  configUrl = 'http://localhost:3000/session';
  constructor(private http: HttpClient) { }

  createSession(session: Session) {
    return this.http.post<Session>(`${this.configUrl}/create`, session);
  }
  joinSession(guestName: string, sessionName: string ){
    return this.http.post<any>(`${this.configUrl}/join`, {guestName, sessionName});
  }
  leaveSession(guestName: string, sessionName: string){
    return this.http.post<any>(`${this.configUrl}/leave`, {guestName, sessionName});
  }
  getSession(sessionName: string){
    return this.http.get<Session>(`${this.configUrl}/${sessionName}`);
  }
}
