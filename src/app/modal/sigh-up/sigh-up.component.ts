import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import { User } from 'src/app/shared/interface/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-sigh-up',
  templateUrl: './sigh-up.component.html',
  styleUrls: ['./sigh-up.component.scss']
})
export
  class SighUpComponent implements OnInit {

  public user: User[] = []

  public username = '';
  public email = '';
  public pass = '';


  constructor(
    private serviceUser: UsersService
  ) { }

  ngOnInit(): void {
    this.getNewUser()
  }

  getNewUser(): void {
    this.user = this.serviceUser.getUsers()
  }

 /*  closeModal(){
    $('#modalSighUn').hide()
    $('.modal-backdrop').hide()
  } */

  formValid(form: NgForm){
    const login = this.user.slice(-1)[0].username;
    const mail = this.user.slice(-1)[0].email;
    if(form.value.user == login){ 
        alert('This login already exists');
       this.username = '';
    }
    if (form.value.mail == mail) {
      alert('This email already exists')
      this.email = '';
    }
  }


  submitForm(form: NgForm) {
      const new_user = {
        id: 1,
        username: this.username,
        email: this.email,
        password: this.pass
      }

      if (this.user.length > 0) {
        const id = this.user.slice(-1)[0].id;
        new_user.id = id + 1;
      }
      this.serviceUser.addUser(new_user)
    this.username = '';
    this.email = '';
    this.pass = '';
console.log(this.user);

    }
  
  }






//data-bs-dismiss="modal"