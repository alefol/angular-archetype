import { Pipe, PipeTransform } from '@angular/core';
import {PersonneEntity} from "../../entities/personne";

@Pipe({
  name: 'personne',
  pure: false
})
export class PersonnePipe implements PipeTransform {

  private oldSearch: {oldPersonnes: PersonneEntity[], oldArg: string, oldResponse: PersonneEntity[]}

  transform(personnes: PersonneEntity[], arg: string = ''): any {
    const out = [];
    if(!personnes){
      return [];
    }

    // if(this.oldSearch && this.oldSearch.oldPersonnes == personnes && this.oldSearch.oldPersonnes.length === personnes.length && this.oldSearch.oldArg == arg){
    //   return this.oldSearch.oldResponse
    // }

    for(const personne of personnes){
      if(personne.nom.includes(arg)|| personne.prenom.includes(arg)){
        out.push(personne);
      }
    }
    this.oldSearch = {oldPersonnes: personnes, oldArg: arg, oldResponse: out};
    return out;
  }

}

@Pipe({
  name: 'personneImpure',
  pure: false
})

export class PersonnePipeImpure extends PersonnePipe {

}
