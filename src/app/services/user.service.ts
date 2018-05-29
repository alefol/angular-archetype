import { Injectable } from '@angular/core';
import {UserModel} from "../entities/user.model";
import {Observable, of} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel;

  constructor() {
    this.user = {
      nom: 'Cédric',
      isAdmin: true
    }
  }

  public getUser(): Observable<UserModel>{
    return of(this.user);
  }

  public setUser(nom: string = '', isAdmin: boolean = false): Observable<UserModel> {
      this.user =  {
        nom: nom,
        isAdmin: isAdmin
      };
      return of(this.user);
  }
}
