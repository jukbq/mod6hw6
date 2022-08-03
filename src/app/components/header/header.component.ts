import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { Post } from 'src/app/shared/interface/blogs.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mod6hw6';

  public active_block: boolean = false;
  public activeUser = '';
  public blogPost: Post[] = [];
  public admin = 'admin';
  public editStatus = false;
  public topic = '';
  public message = '';
  public editID!: number;
  public new = new Date().toLocaleString()


  constructor(
    private blogService: BlogsService,
  ) { }

  ngOnInit(): void {
    this.getActive()
    console.log(this.activeUser);

  }

  getActive() {
    this.blogPost = this.blogService.getPost()
  }

  changeStatus(data: boolean) {
    this.active_block = data;
  }

  addActUser(data: string) {
    this.activeUser = data;
  }

  signOut() {
    this.activeUser = '';
    this.active_block = false;
  }

  edit(index: Post): void {
    this.topic = index.topic
    this.message = index.message
    this.editID = index.id
  }

  saveEdit(): void{
    const upPost = {
      id: this.editID,
      postedBy: this.activeUser,
      topic: this.topic,
      date: this.new,
      message: this.message
    }
    this.blogService.updatePost(upPost, this.editID)
  }

  delPost(post: Post): void {
    if (confirm('Are you sure?')) {
      this.blogService.deletePost(post.id)
    }
  }

}




