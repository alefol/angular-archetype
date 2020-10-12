import {Component, OnInit} from '@angular/core';
import { PersonneEntity } from 'src/app/models/personne';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PersonneService } from '../services/personne/personne.service';


function inputMailValidator(control: FormControl): any {
  const value = control.value || '';
  if (!value.includes('acii.fr')) {
    return {domaineError: true};
  }
}

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent implements OnInit {

  personnes: PersonneEntity[];

  personneForm: FormGroup;

  personneACreer: PersonneEntity;

  inputSearch: string;

  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  mailCtrl: FormControl;


  constructor(private personneService: PersonneService, private fb: FormBuilder) {
   }

  ngOnInit() {
    this.personneACreer = new PersonneEntity();
    this.inputSearch = '';

    this.nomCtrl = new FormControl(this.personneACreer.nom);
    this.prenomCtrl = new FormControl(this.personneACreer.prenom);
    this.mailCtrl = new FormControl(this.personneACreer.email, [Validators.required, Validators.email, inputMailValidator]);

    this.personneForm = this.fb.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      email: this.mailCtrl
    });

    this.nomCtrl.valueChanges
      .subscribe(value => this.personneACreer.nom = value);
    this.prenomCtrl.valueChanges
      .subscribe(value => this.personneACreer.prenom = value);
    this.mailCtrl.valueChanges
      .subscribe(value => this.personneACreer.email = value);

    this.personneService.getAll().subscribe(
      personnes => {
        this.personnes = personnes;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log(this.personneACreer);

    this.personneService.create(this.personneACreer).subscribe(
      id => {
        console.log(`persone créée avec l'id suivant: ${id}`);
        this.personneACreer.id = id;
        this.personnes.push(this.personneACreer);
      }
    );
  }


  supprimer(event) {
    console.log('suppression');
    const id = this.personnes.indexOf(event);
    this.personneService.deleteById(event.id).subscribe(
      () => {
        if (id >= 0) {
          this.personnes.splice(id, 1);
        }
    });
  }

}
