import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interface/users.interface';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mod6hw6';
  public user: User[] = [];


  constructor(
    private serviceUser: UsersService
  ) { }

  ngOnInit(): void {
    this.user = this.serviceUser.userArr
    console.log(this.user);
    
  }

}
