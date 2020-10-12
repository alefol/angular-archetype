import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PersonneEntity} from '../../../models/personne';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import { PersonneService } from '../services/personne/personne.service';

@Injectable()
export class PersonneResolver implements Resolve<PersonneEntity> {
  constructor(private personneService: PersonneService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonneEntity> | PersonneEntity {
    const id: string = route.paramMap.get('id');
    if (!id) {
      return new PersonneEntity();
    }
    return this.personneService.getById(+id);
  }

}
