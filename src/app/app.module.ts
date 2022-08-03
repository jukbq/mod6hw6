import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { SighUpComponent } from './modal/sigh-up/sigh-up.component';
import { SighInComponent } from './modal/sigh-in/sigh-in.component';
import { PostComponent } from './modal/post/post.component';








@NgModule({
  declarations: [
    AppComponent, HeaderComponent,  SighUpComponent, SighInComponent,  PostComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  titel = 'mod6hw6'
}
