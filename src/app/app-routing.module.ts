import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from 'src/app/components/personnes/personnes.component';


const ROUTES: Routes = [
    { path: 'personnes', component: PersonnesComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}