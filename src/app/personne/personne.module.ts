///<reference path="../../../node_modules/@angular/platform-browser/src/browser.d.ts"/>
///<reference path="../../../node_modules/@angular/router/src/router_module.d.ts"/>

import {PersonneComponent} from "./personne/personne.component";
import {PersonnesComponent} from "./personnes/personnes.component";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PersonneRoutingModule} from "./personne-routing.module";
import {PersonnePipe, PersonnePipeImpure} from './pipes/personne.pipe';
import {InputColorDirective} from "../directives/input-color.directive";
import {CommonModule} from "@angular/common";
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { PersonneService } from "./services/personne/personne.service";
import { PersonneResolver } from "./resolvers/personne.resolver";

@NgModule({
  declarations: [
    PersonneComponent,
    PersonnesComponent,
    PersonnePipe,
    PersonnePipeImpure,
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
    PersonneRoutingModule
  ],
  providers: [
    PersonneService,
    PersonneResolver
  ]

})
export class PersonneModule {

}
