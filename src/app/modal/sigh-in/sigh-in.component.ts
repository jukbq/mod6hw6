import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import { EventListener } from 'ngx-bootstrap/utils/facade/browser';
import { User } from 'src/app/shared/interface/users.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-sigh-in',
  templateUrl: './sigh-in.component.html',
  styleUrls: ['./sigh-in.component.scss']
})
export class SighInComponent implements OnInit {
  @Output() activeBatt = new EventEmitter<any>();
  @Output() wrongModal = new EventEmitter<any>();

  public user: User[] = []
  public activeUser = '';
  public active_block = false;
  public wrong_nodal = false;

  public email = '';
  public pass = '';
 


  constructor(
    private serviceUser: UsersService,
    public blogService: BlogsService
  ) { }

  ngOnInit(): void {

    this.getNewUser()

  }

  getNewUser(): void {
    this.user = this.serviceUser.getUsers()
 
  }


  submitForm(form: NgForm) {
    const email = this.user.slice(-1)[0].email;
    const pass = this.user.slice(-1)[0].password;

    if (form.value.mail === email && form.value.password === pass) {
      if (this.user.length > 0) {
        const activeUser = this.user.slice(-1)[0].username;
        this.activeUser = activeUser
        this.blogService.addAciveUser(activeUser)
        console.log(activeUser);
     
      }
      this.active_block = true;
      this.activeBatt.emit(this.active_block)
    }else{
    this.pass = '';
    this.email = '';
    this.wrong_nodal = true
    this.wrongModal.emit(this.wrong_nodal);
    console.log(this.wrong_nodal)
    }



  }

}
