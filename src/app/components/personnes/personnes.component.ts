import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service';
import { PersonneEntity } from 'src/app/entities/personne';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent implements OnInit {

  personnes: PersonneEntity[];

  personneForm : FormGroup;

  personneACreer: PersonneEntity;

  constructor(private personneService: PersonneService, private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      nom: ['', ],
      prenom: [''],
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {
    this.personneService.getAllPersonnes().subscribe(
      personnes => {
        this.personnes = personnes;
      }
    )
  }

  onSubmit(){
    this.personneACreer = new PersonneEntity(
      this.personneForm.controls.email.value,
      this.personneForm.controls.nom.value,
      this.personneForm.controls.prenom.value
    );

    console.log(this.personneACreer);

    this.personneService.createPersonne(this.personneACreer).subscribe(
      id => {
        console.log("persone créée avec l'id suivant: "+id);
      }
    )
  }

  supprimer(event){
    console.log("suppression");
    var number = this.personnes.indexOf(event);
    if(number >= 0){
      this.personnes.splice(number, 1);
    }
  }

}
