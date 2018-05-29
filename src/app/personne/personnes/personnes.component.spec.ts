import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesComponent } from './personnes.component';
import {PersonneService} from "../../services/personne.service";
import {PersonneEntity} from "../../entities/personne";
import {of} from "rxjs/internal/observable/of";

describe('PersonnesComponent', () => {
  let component: PersonnesComponent;
  let fixture: ComponentFixture<PersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnesComponent, PersonnesComponent ],
      providers: [PersonneService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save a person', async( () => {
    const personneTest = new PersonneEntity(null, 'mail@test.fr', 'nomTest', 'prenom test' );
    const idTest: number = 50;
    const personnesLength = component.personnes.length;
    spyOn(component['personneService'], 'createPersonne').and.returnValue(of(idTest));
    component.personneACreer = personneTest;
    component.onSubmit();
    expect(component['personneService'].createPersonne).toHaveBeenCalledWith(personneTest);
    expect(component.personneACreer.id).toEqual(50);
    expect(component.personnes.length).toEqual(personnesLength + 1);
  }));
});
