import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneDetailsComponent } from './personne-details.component';
import {PersonneComponent} from '../personne/personne.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { PersonneService } from '../services/personne/personne.service';

describe('PersonneDetailsComponent', () => {
  let component: PersonneDetailsComponent;
  let fixture: ComponentFixture<PersonneDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonneDetailsComponent,
        PersonneComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [PersonneService]
    });
    TestBed.overrideTemplate(PersonneComponent, `<h1>PersonneComponent</h1>`);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
