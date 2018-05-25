import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonneComponent } from './components/personne/personne.component';
import { PersonnesComponent } from './components/personnes/personnes.component';
import { PersonneService } from './services/personne.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    PersonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})

export class AppModule { }
