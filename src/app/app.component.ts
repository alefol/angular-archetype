import {Component, OnDestroy, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  subscriptions: Subscription[] = [];

  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private userservice: UserService) {

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.userservice.isAuthenticated();
    this.subscriptions.push(
      this.router.events.subscribe(
        event => {
          if(event instanceof  NavigationStart){
            console.log("navigation starts");
          }
          else if(event instanceof NavigationEnd) {
            console.log("navigation ends");
          }
        }
      )
    )
  }

  ngOnDestroy(): void {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  onLogout(){
    console.log("demande de déconnexion");
    this.userservice.disconnect().subscribe(
      () => {
        this.router.navigate(['/login'])      
      },
      err => {
        console.error("échec de la déconnexion")
      }

    );
  }
}
