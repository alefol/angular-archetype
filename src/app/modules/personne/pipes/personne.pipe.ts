import { Pipe, PipeTransform } from '@angular/core';
import {PersonneEntity} from '../../../models/personne';

@Pipe({
  name: 'personne',
  pure: false
})
export class PersonnePipe implements PipeTransform {

  private oldSearch: {oldPersonnes: PersonneEntity[], oldArg: string, oldResponse: PersonneEntity[] };

  transform(personnes: PersonneEntity[], arg: string = ''): any {
    const out = [];
    if (!personnes) {
      return [];
    }

    for (const personne of personnes) {
      if (personne.nom.includes(arg) || personne.prenom.includes(arg)) {
        out.push(personne);
      }
    }
    this.oldSearch = {oldPersonnes: personnes, oldArg: arg, oldResponse: out};
    return out;
  }

}
