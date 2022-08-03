import { IfStmt, outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import { EventListener } from 'ngx-bootstrap/utils/facade/browser';
import { find } from 'rxjs';
import { User } from 'src/app/shared/interface/users.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-sigh-in',
  templateUrl: './sigh-in.component.html',
  styleUrls: ['./sigh-in.component.scss']
})
export class SighInComponent implements OnInit {
  @Output() activeButt = new EventEmitter<any>();
  @Output() addActiveUser = new EventEmitter<any>();
  @Output() activeButtBlock = new EventEmitter<any>();



  public user: User[] = []
  public activeUser = '';
  public active_block = false;
  public admin = 'admin'


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

  mailValid(form: NgForm) {
    let userAee = this.user
    let mail = this.email;

    let email = userAee.find(valMail => valMail.email === mail)?.email
console.log(email);

    if (email == undefined) {
      this.email = ''
      $('.invalid-mail').addClass('_active')
    } else {
      $('.invalid-mail').removeClass('_active')
    } 
  }

  passValid(form: NgForm) {
    let userAee = this.user
    let pass = this.pass;

    let passwied = userAee.find(valPass => valPass.password === pass)?.password
    console.log(passwied);

    if (passwied == undefined) {
      this.pass = ''
      $('.invalid-mail').addClass('_active')
    } else {
      $('.invalid-mail').removeClass('_active')
    } 
  }


  submitForm(form: NgForm) {
    const email = this.user.slice(-1)[0].email;
    const pass = this.user.slice(-1)[0].password;

    if (this.user.length > 0) {
      const activeUser = this.user.slice(-1)[0].username;
      this.activeUser = activeUser
      this.blogService.addAciveUser(activeUser)
    }

    this.active_block = true;
    this.activeButt.emit(this.active_block);
    this.addActiveUser.emit(this.activeUser);
    this.activeButtBlock.emit(this.active_block)


    this.pass = '';
    this.email = '';
  }
}
