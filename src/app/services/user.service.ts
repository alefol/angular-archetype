import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from "../entities/user.model";
import { Observable, of, Observer, Subject, throwError } from "rxjs"
import { ErrorModel } from '../entities/error.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel;

  private users: UserModel[] = [
    {
      nom: "jacques",
      password: "jacques",
      isAdmin: true
    },
    {
      nom: "pierre",
      password: "pierre",
      isAdmin: true
    }
  ];

  private isAuthObservable: Observable<boolean>;
  private isAuthSubject: Subject<boolean>;

  constructor() {
    this.isAuthSubject = new Subject();
  }

  public authenticate(login: string, mdp: string): Observable<UserModel>{
    this.user = this.users.find( (user) => user.nom == login && user.password == mdp);
    if(this.user){
      this.isAuthSubject.next(true);
    } else {
      return throwError(new ErrorModel(500, "échec de l'authentification, login ou mot de passe incorrecte"));
    }
    return of(this.user);
  }

  public isAuthenticated(): Observable<boolean>{
    let auth = this.user != undefined && this.user != null;
    if(this.user == undefined || this.user == null){
      return this.isAuthSubject;
    }
    return of(true);
  }
  

  public disconnect(){
    this.user = null;
    this.isAuthSubject.next(false);
    return of(true);
  }

  public getUser(): Observable<UserModel> {
    return of(this.user);
  }

  public setUser(nom: string = '', password: string = '', isAdmin: boolean = false): Observable<UserModel> {
    this.user = {
      nom: nom,
      password: password,
      isAdmin: isAdmin
    };
    return of(this.user);
  }
}
