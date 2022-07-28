import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SighUpComponent } from './modal/sigh-up/sigh-up.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'SignUp', component: SighUpComponent},
  { path: 'SignIp', component: SighUpComponent},
  { path: 'Header', component: HeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
   
  ]
})
export class AppRoutingModule { }
