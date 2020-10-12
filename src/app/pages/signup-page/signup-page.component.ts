import { Component, OnInit } from '@angular/core';
import { PersonneEntity } from '../../models/personne';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  personne: PersonneEntity;
  passwordRetype: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.personne = new PersonneEntity();
  }

  onSubmit() {
    this.userService.inscription(this.personne).subscribe(
      (id: number) => console.log(id)
    );
    console.log(this.personne);
  }


}
