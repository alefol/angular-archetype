import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Observable, of, Observer, Subject, throwError } from 'rxjs';
import { ErrorModel } from '../../models/error.model';
import { HttpClient } from '@angular/common/http';
import { PersonneEntity } from '../../models/personne';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserServiceMock {

  private user: UserModel;

  private readonly urlApi: string = 'auth';

  private users: UserModel[] = [
    {
      email: 'jacques',
      password: 'jacques',
      isAdmin: true
    },
    {
      email: 'pierre',
      password: 'pierre',
      isAdmin: true
    }
  ];

  private isAuthSubject: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.isAuthSubject = new Subject();
  }

  public authenticate(login: string, mdp: string): Observable<UserModel> {
    this.user = this.users.find( (user) => user.email === login && user.password === mdp);
    if (this.user) {
      this.isAuthSubject.next(true);
    } else {
      return throwError(new ErrorModel(500, 'échec de l\'authentification, login ou mot de passe incorrecte'));
    }
    return of(this.user);
  }

  public isAuthenticated(): Observable<boolean> {
    if (this.user === undefined || this.user == null) {
      return this.isAuthSubject;
    }
    return of(true);
  }

  public inscription(personne: PersonneEntity): Observable<number> {
    return this.http.post<number>(`${environment.backend}${this.urlApi}/signup`, personne);
  }

  public disconnect() {
    this.user = null;
    this.isAuthSubject.next(false);
    return of(true);
  }

  public getUser(): Observable<UserModel> {
    return of(this.user);
  }

  public setUser(email: string = '', password: string = '', isAdmin: boolean = false): Observable<UserModel> {
    this.user = {
      email: email,
      password: password,
      isAdmin: isAdmin
    };
    return of(this.user);
  }
}
