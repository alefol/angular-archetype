import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from 'src/app/personne/personnes/personnes.component';
import {HomeComponent} from "./components/home/home.component";
import {SettingsComponent} from "./components/settings/settings.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const ROUTES: Routes = [
    { path: 'personnes', loadChildren: './personne/personne.module#PersonneModule' },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', component: ErrorPageComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
