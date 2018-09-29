import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from "../entities/user.model";
import { Observable, of, Observer, Subject, throwError } from "rxjs"
import { ErrorModel } from '../entities/error.model';
import { HttpClient } from '@angular/common/http';
import { PersonneEntity } from '../entities/personne';
import { environment } from '../../environments/environment.prod';
import { tokenKey } from '@angular/core/src/view';
import { tap, map } from 'rxjs/operators';
import { Token } from 'src/app/entities/token.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel;
  private authenticated: Subject<boolean>;

  private readonly urlApi : string = "auth";
  private readonly tokenKey: string = "jwtToken"

  constructor(private http: HttpClient) {
    this.authenticated = new Subject<boolean>();
  }

  public authenticate(login: string, mdp: string) {
     return this.http.post<Token>(`${environment.backend}${this.urlApi}/login`, {login: login, password: mdp}/*, {responseType: 'text' as 'text'}*/)
        .pipe(
          tap(res => this.setSession(res))
        );
  }

  private setSession(jwtToken: Token){
    localStorage.setItem(this.tokenKey, jwtToken.token);
    this.authenticated.next(true);
  }

  public isAuthenticated(): Observable<boolean> {
    return of(localStorage.getItem(this.tokenKey)!=null);
  }

  public getAuthentication(): Observable<boolean>{
    return this.authenticated
  }

  public inscription(personne: PersonneEntity): Observable<number> {
    return this.http.post<number>(`${environment.backend}${this.urlApi}/signup`, personne);
  }

  public disconnect(): Observable<boolean>{
    localStorage.removeItem(this.tokenKey);
    this.authenticated.next(false);
    return of(true);
  }
}
