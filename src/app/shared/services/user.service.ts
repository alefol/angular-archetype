import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonneEntity } from '../../models/personne';
import { environment } from '../../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { Token } from 'src/app/models/token.model';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authenticated: Subject<boolean>;

  private readonly urlApi: string = 'auth';
  private readonly tokenKey: string = 'jwtToken';

  constructor(private http: HttpClient) {
    this.authenticated = new Subject<boolean>();
  }

  public authenticate(login: string, mdp: string) {
     return this.http.post<Token>(`${environment.backend}${this.urlApi}/login`, {login: login, password: mdp})
        .pipe(
          tap(res => this.setSession(res))
        );
  }

  /*public getCurrentUser(): UserModel {

  }*/

  private setSession(jwtToken: Token) {
    localStorage.setItem(this.tokenKey, jwtToken.token);
    this.authenticated.next(true);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) != null;
  }

  public getAuthentication(): Observable<boolean> {
    return this.authenticated;
  }

  public inscription(personne: PersonneEntity): Observable<number> {
    return this.http.post<number>(`${environment.backend}${this.urlApi}/signup`, personne);
  }

  public disconnect(): Observable<boolean> {
    localStorage.removeItem(this.tokenKey);
    this.authenticated.next(false);
    return of(true);
  }
}
