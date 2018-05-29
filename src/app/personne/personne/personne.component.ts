import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonneEntity } from 'src/app/entities/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {

  @Input()
  personne: PersonneEntity;

  @Output()
  onDelete: EventEmitter<PersonneEntity> = new EventEmitter<PersonneEntity>();

  constructor() { }

  ngOnInit() {
  }

  supprimer(personne: PersonneEntity){
    console.log("suppression");
    this.onDelete.emit(personne);
  }

}
