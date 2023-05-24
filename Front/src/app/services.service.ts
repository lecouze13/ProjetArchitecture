import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  redirectUrl: string;

  baseUrl: string = "http://localhost:8080/frais-deplacement";

  constructor(private http: HttpClient) {
    this.redirectUrl = "";
  }
  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(this.baseUrl, body);
  }
  DemandeConge(date1: any, date2: any, NbJour: any): Observable<any> {
    const body = {
      date1: date1,
      date2: date2,
      NbJour: NbJour
    };

    return this.http.post<any>(this.baseUrl, body);
  }
}





