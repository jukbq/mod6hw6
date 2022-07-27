import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SighInComponent } from 'src/app/modal/sigh-in/sigh-in.component';
import { SighUpComponent } from 'src/app/modal/sigh-up/sigh-up.component';
import { UsersService } from 'src/app/shared/services/users.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mod6hw6';
  
  public active_block = false
  public activeUser = '';

  constructor(
    private serviceUser: UsersService
   ) { }

  ngOnInit(): void {



  }


  
  
}
