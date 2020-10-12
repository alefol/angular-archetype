import { Component, OnInit } from '@angular/core';
import {PersonneEntity} from '../../../models/personne';
import {ActivatedRoute} from '@angular/router';
import { PersonneService } from '../services/personne/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  personne: PersonneEntity;

  constructor(private personneService: PersonneService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('personne details onInit()');
    // const id: string = this.route.snapshot.paramMap.get('id');
    // this.route.params
    //   .pipe(
    //     map((params) => +params['id'] || 0),
    //     switchMap( id => this.personneService.getById(id))
    //   )
    //   .subscribe(
    //     personne => this.personne = personne
    //   );
    // if(id){
    //   this.personneService.getById(+id)
    //     .subscribe(
    //       personne => this.personne = personne
    //     );
    // }

    this.personne = this.route.snapshot.data['maPersonne'];
  }

}
