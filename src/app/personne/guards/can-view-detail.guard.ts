import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PersonneModule} from "../personne.module";
import {UserService} from "../../services/user.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CanViewDetailGuard implements CanActivate {
  constructor(private userService: UserService){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUser().pipe(
      map(user => user.isAdmin)
    );
  }
}
