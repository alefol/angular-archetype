import {TestBed, inject, async} from '@angular/core/testing';

import { PersonneService } from './personne.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { PersonneInterface, PersonneEntity } from '../../../entities/personne';
import { environment } from '../../../../environments/environment';


describe('PersonneService', () => {
  let service: PersonneService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneService],
      imports: [HttpClientTestingModule]
    });
  });
  beforeEach(() => {
    service = TestBed.get(PersonneService);
    http = TestBed.get(HttpClientTestingModule);
  });
  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));
  it('should return an instance of PersonneEntity', function() {
    const testJson: PersonneInterface = {
      id: 50,
      email: 'test_email',
      nom: 'test_nom',
      prenom: 'test_prenom',
      password: '123'
    };
    let reponse  : PersonneEntity;
    service.getById(50).subscribe(res => reponse = res);
    http.expectOne(`${environment.backend}${this.urlApi}/${testJson.id}`).flush(testJson);
    expect(reponse instanceof PersonneEntity).toBeTruthy()
    expect(reponse.id).toEqual(testJson.id);
    expect(reponse.email).toEqual(testJson.email);
    expect(reponse.nom).toEqual(testJson.nom);
    expect(reponse.prenom).toEqual(testJson.prenom);

  })
});
