import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import { User } from 'src/app/shared/interface/users.interface';

@Component({
  selector: 'app-sigh-in',
  templateUrl: './sigh-in.component.html',
  styleUrls: ['./sigh-in.component.scss']
})
export class SighInComponent implements OnInit {
public user: User[] = [];

  public email = '';
  public pass = '';


  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    const login = this.user.slice(-1)[0].username;
    const mail = this.user.slice(-1)[0].email;

    

  }

}
