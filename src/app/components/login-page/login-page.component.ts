import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../entities/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ErrorModel } from '../../entities/error.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: UserModel;
  error: ErrorModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit() {
    console.log(this.user);
    this.userService.authenticate(this.user.nom, this.user.password).subscribe(
      (user) => {
        console.log(user);
        this.router.navigate(['/personnes']);
      },
      err => {
        console.log(err);
        this.error = err;
      }
    );
  }

}
