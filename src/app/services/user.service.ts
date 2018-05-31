import { Injectable } from '@angular/core';
import { UserModel } from "../entities/user.model";
import { Observable, of } from "rxjs"

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

  constructor() {
  }

  public authenticate(login: string, mdp: string): Observable<UserModel>{
    this.user = this.users.find( (user) => user.nom == login && user.password == mdp);
    return of(this.user);
  }

  public isAuthenticated(): Observable<boolean>{
    return of(this.user != null);
  }

  public disconnect(){
    this.user = null;
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
