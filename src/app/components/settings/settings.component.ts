import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../entities/user.model";
import {UserService} from "../../services/user.service";
import { UserServiceMock } from '../../services/user.service.mock';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: UserModel;

  constructor(private userService: UserServiceMock) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

  saveUser(): void {
    this.userService.setUser(this.user.email, '' , this.user.isAdmin)
      .subscribe(
        res => console.log('Save user succes', res)
      )
  }

}
