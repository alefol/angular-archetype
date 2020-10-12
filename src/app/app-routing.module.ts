import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SettingsComponent} from './pages/settings/settings.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


const ROUTES: Routes = [
    { path: 'personnes', loadChildren: './modules/personne/personne.module#PersonneModule' },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', component: ErrorPageComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
