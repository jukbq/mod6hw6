import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PostComponent } from './modal/post/post.component';
import { SighInComponent } from './modal/sigh-in/sigh-in.component';
import { SighUpComponent } from './modal/sigh-up/sigh-up.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [



  { path: 'post', component: PostComponent }, 
  { path: 'SignIn', component: SighInComponent },
  { path: 'SignUp', component: SighUpComponent },
  { path: 'Header', component: HeaderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
