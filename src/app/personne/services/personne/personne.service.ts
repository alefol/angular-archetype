import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PersonneEntity, PersonneInterface, personneFactory, personnesFactory} from 'src/app/entities/personne';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private readonly urlApi : string = "personne";

  constructor(private http: HttpClient) { }

  public getAllPersonnes(): Observable<PersonneEntity[]> {
    return this.http.get<PersonneInterface[]>(environment.backend + this.urlApi)
      .pipe(
        map(personnesFactory),
        catchError(err => {
          return throwError(err)
        })
      );
  }

  public createPersonne(personne: PersonneEntity): Observable<number> {
    return this.http.post<number>(environment.backend + this.urlApi, personne);
  }

  public getById(id: number): Observable<PersonneEntity>{
    return this.http.get<PersonneInterface>(`${environment.backend}${this.urlApi}/${id}`)
      .pipe(
        map(personneFactory)
      )
  }

  public deleteById(id: number){
    return this.http.delete(`${environment.backend}${this.urlApi}/${id}`);
  }

}