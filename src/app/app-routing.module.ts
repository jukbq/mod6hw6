import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SighUpComponent } from './modal/sigh-up/sigh-up.component';


const routes: Routes = [
  { path: 'SignUp', component: SighUpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
   
  ]
})
export class AppRoutingModule { }
