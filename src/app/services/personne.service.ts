import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonneEntity } from 'src/app/entities/personne';
import { environment } from '../../environments/environment.prod';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private urlApi : string = "personne";

  constructor(private http: HttpClient) { }

  public getAllPersonnes(): Observable<PersonneEntity[]> {
    return this.http.get<PersonneEntity[]>(environment.backend + this.urlApi);
  }

  public createPersonne(personne: PersonneEntity): Observable<Number> {
    return this.http.post<Number>(environment.backend + this.urlApi, personne);
  }
  
}