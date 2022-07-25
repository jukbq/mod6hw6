;
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { SighUpComponent } from './modal/sigh-up/sigh-up.component';
import { FindPipe } from './pipe/find.pipe';






@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BlogComponent, SighUpComponent, FindPipe,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  titel = 'mod6hw6'
}
