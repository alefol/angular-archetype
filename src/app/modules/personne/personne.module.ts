import {PersonneComponent} from './personne/personne.component';
import {PersonnesComponent} from './personnes/personnes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PersonnePipe} from './pipes/personne.pipe';
import {InputColorDirective} from '../../shared/directives/input-color.directive';
import {CommonModule} from '@angular/common';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { PersonneService } from './services/personne/personne.service';
import { PersonneResolver } from './resolvers/personne.resolver';
import { PersonneRoutingModule } from './personne-routing.module';

@NgModule({
  declarations: [
    PersonneComponent,
    PersonnesComponent,
    PersonnePipe,
    InputColorDirective,
    PersonneDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    PersonneRoutingModule,
    MatCardModule
  ],
  providers: [
    PersonneService,
    PersonneResolver
  ]

})
export class PersonneModule {

}
