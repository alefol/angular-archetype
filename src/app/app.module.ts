import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatFormField,
  MatInputModule, MatFormFieldModule, MatCheckboxModule, MatSidenavModule, MatDividerModule, MatListModule
} from '@angular/material'
import { PersonneInterceptor } from "./interceptors/personne.interceptor";
import { PersonneModule } from "./personne/personne.module";
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {InputColor2Directive, InputColorDirective} from './directives/input-color.directive';
import { SettingsComponent } from './components/settings/settings.component';
import {FormsModule} from "@angular/forms";
import { AddRequiredDirective } from './directives/add-required.directive';
import {environment} from "../environments/environment";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const ROUTES: Routes = [
  { path: 'personnes', loadChildren: './personne/personne.module#PersonneModule' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

export const isProdToken = new InjectionToken('is_prod', {
  providedIn: 'root',
  factory: () => environment.production
});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    AddRequiredDirective,
    InputColor2Directive,
    ErrorPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
