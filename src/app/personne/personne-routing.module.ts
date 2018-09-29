import {PersonnesComponent} from "./personnes/personnes.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PersonneDetailsComponent} from "./personne-details/personne-details.component";
import {CanViewDetailGuard} from "./guards/can-view-detail.guard";
import {PersonneResolver} from "./resolvers/personne.resolver";
import { IsAuthenticatedGuard } from "./guards/is-authenticated.guard";

const ROUTES: Routes = [
  { path: '', component: PersonnesComponent, canActivate: [IsAuthenticatedGuard] },
  { path: ':id', component: PersonneDetailsComponent, canActivate: [IsAuthenticatedGuard/*, CanViewDetailGuard*/], resolve: {maPersonne: PersonneResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class PersonneRoutingModule { }
