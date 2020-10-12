import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { UserServiceMock } from '../../../shared/services/user.service.mock';

@Injectable({
  providedIn: 'root'
})
export class CanViewDetailGuard implements CanActivate {
  constructor(private userService: UserServiceMock) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUser().pipe(
      map(user => user.isAdmin)
    );
  }
}
