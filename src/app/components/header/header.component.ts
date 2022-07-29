import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mod6hw6';

  public active_block: boolean = false;
  public wrongModal: boolean = false;
  public activeUser = '';



  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(data: boolean) {
    this.active_block = data;
  }

  copenModal(data: boolean) {
    this.wrongModal = data;
  }

  closeModal() {
    this.wrongModal = false;
  }
  addActUser(data: string) {
    this.activeUser = data;
  }

  signOut() {
    this.activeUser = '';
    this.active_block = false;
  }
}
