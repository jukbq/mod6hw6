import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/shared/interface/blogs.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public blog: Post[] = []
  public topic = '';
  public message = '';
  public activeUser = '';
  public postedBy = '';
  public now = new Date().toLocaleString()








  constructor(
    private blogService: BlogsService
  ) { }

  ngOnInit(): void {
    this.getActiveUser()
   
  }

  getActiveUser() {
    this.activeUser = this.blogService.getActiveUser();
    this.blog = this.blogService.getPost();
 
  }

  submitForm(form: NgForm) {
    const new_post = {
      id: 1,
      postedBy: this.activeUser,
      topic: this.topic,
      date: this.now,
      message: this.message
    }
    if (this.blog.length > 0) {
      const id = this.blog.slice(-1)[0].id;
      new_post.id = id + 1;
    }
    this.blogService.addPost(new_post)
    this.clear()
  }

clear(){
  this.postedBy = '';
  this.topic = '';
  this.message = '';
}





}



