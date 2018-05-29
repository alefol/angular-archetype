import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from 'src/app/personne/personnes/personnes.component';
import {HomeComponent} from "./components/home/home.component";
import {SettingsComponent} from "./components/settings/settings.component";


const ROUTES: Routes = [
    { path: 'personnes', loadChildren: './personne/personne.module#PersonneModule' },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
