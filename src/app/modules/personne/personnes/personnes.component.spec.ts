import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesComponent } from './personnes.component';
import {PersonneEntity} from '../../../models/personne';
import {of} from 'rxjs/internal/observable/of';
import { PersonneService } from '../services/personne/personne.service';

describe('PersonnesComponent', () => {
  let component: PersonnesComponent;
  let fixture: ComponentFixture<PersonnesComponent>;
  const personneTest = new PersonneEntity(null, 'mail@test.fr', 'nomTest', 'prenom test' );

  beforeEach(waitForAsync(() => {
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

  it('should save a person', waitForAsync( () => {
    const idTest = 50;
    const personnesLength = component.personnes.length;
    spyOn(component['personneService'], 'create').and.returnValue(of(idTest));
    component.personneACreer = personneTest;
    component.onSubmit();
    expect(component['personneService'].create).toHaveBeenCalledWith(personneTest);
    expect(component.personneACreer.id).toEqual(50);
    expect(component.personnes.length).toEqual(personnesLength + 1);
  }));

  it('should be deleted', waitForAsync( () => {
    component.personnes.push(personneTest);
    spyOn(component['personneService'], 'deleteById').and.returnValue(of());
    component.supprimer(personneTest);
    expect(component['personneService'].deleteById).toHaveBeenCalledWith(personneTest);
    expect(component.personnes.length).toEqual(0);
  }));
});
