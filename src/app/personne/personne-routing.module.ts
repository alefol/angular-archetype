import {PersonnesComponent} from "./personnes/personnes.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PersonneDetailsComponent} from "./personne-details/personne-details.component";
import {CanViewDetailGuard} from "./guards/can-view-detail.guard";
import {PersonneResolver} from "./resolvers/personne.resolver";
import {PersonneService} from "../services/personne.service";

const ROUTES: Routes = [
  { path: '', component: PersonnesComponent },
  { path: ':id', component: PersonneDetailsComponent, canActivate: [CanViewDetailGuard], resolve: {maPersonne: PersonneResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [PersonneService, {provide: PersonneResolver, useClass: PersonneResolver, deps: [PersonneService]} ]
})

export class PersonneRoutingModule { }
