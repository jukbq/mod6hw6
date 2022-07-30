import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";

import { HeaderComponent } from 'src/app/components/header/header.component';

import { User } from 'src/app/shared/interface/users.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-sigh-up',
  templateUrl: './sigh-up.component.html',
  styleUrls: ['./sigh-up.component.scss']
})

export
  class SighUpComponent implements OnInit {
  @Output() activeBatt = new EventEmitter<any>();
  @Output() wrongModal = new EventEmitter<any>();
  @Output() addActiveUser = new EventEmitter<any>();

  public user: User[] = []
  public activeUser = '';
  public active_block = false;
  public sighUpModal = false;
  public errorModal = false;
  public error_name = '';
  public error_text = '';


  public username = '';
  public email = '';
  public pass = '';
  static status: boolean;
  static submitForm: string;





  constructor(

    private serviceUser: UsersService,
    private blogService: BlogsService

  ) { }

  ngOnInit(): void {

    this.getNewUser()


  }

  getNewUser(): void {
    this.user = this.serviceUser.getUsers()



  }



  formValid(form: NgForm) {
    const login = this.user.slice(-1)[0].username;
    const mail = this.user.slice(-1)[0].email;
    if (form.value.user == login) {
      this.username = ''
      $('.invalid-uname').addClass('_active')
    }else{
      $('.invalid-uname').removeClass('_active')
    }

    if (form.value.mail == mail) {
      this.email = ''
      $('.invalid-mail').addClass('_active')

      }else {
      $('.invalid-mail').removeClass('_active')
      }
    
  }


  submitForm(form: NgForm) {

    let active: boolean = true

    const new_user = {
      id: 1,
      username: this.username,
      email: this.email,
      password: this.pass
    }
    const activeUser = this.username
    if (this.user.length > 0) {
      const id = this.user.slice(-1)[0].id;
      new_user.id = id + 1;
    }
    console.log(this.activeUser);

    this.serviceUser.addUser(new_user)
    this.blogService.addAciveUser(activeUser)
    this.active_block = true;
    this.activeUser = activeUser
    this.activeBatt.emit(this.active_block)
    this.addActiveUser.emit(this.activeUser)
    console.log(this.activeUser);
    this.username = '';
    this.email = '';
    this.pass = '';



  }

  closeModal() {
    this.errorModal = false
  }



}







//data-bs-dismiss="modal"