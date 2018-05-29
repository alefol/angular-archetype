import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  subscriptions: Subscription[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
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
}
