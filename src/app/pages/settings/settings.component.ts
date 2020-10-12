import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    /*this.userService.getUser()
      .subscribe(user => this.user = user);*/
  }

  saveUser(): void {
    /*this.userService.setUser(this.user.email, '' , this.user.isAdmin)
      .subscribe(
        res => console.log('Save user succes', res)
      );*/
  }

}
