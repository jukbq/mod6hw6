import { Injectable } from '@angular/core';
import { Post } from '../interface/blogs.interface';



@Injectable({
  providedIn: 'root'


})
export class BlogsService {
  public new = new Date().toLocaleString()
  public activeUser = ''
  public active = true
  public editID!: number;
  private blogsArr: Array<Post> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      date: this.new,
      message: 'Sign up to cteate your account and start to user Angular Blog'
    }
  ];

  constructor() { }


  butBlock(): any {
    if (this.activeUser == 'admin') {
      return this.active;
    }
  }

  getActiveUser() {
    return this.activeUser
  }
  addAciveUser(active: string): void {
    this.activeUser = active
  }

  getPost(): Array<Post> {
    return this.blogsArr
  }

  addPost(post: Post): void {
    this.blogsArr.push(post)
  }

  getEditID() {
    return this.editID
  }


  updatePost(post: Post, id: number): void{
  const index = this.blogsArr.findIndex(post => post.id === id);
  this.blogsArr.splice(index, 1, post);
}

  deletePost(id: number): void {
    const index = this.blogsArr.findIndex(post => post.id === id);
    this.blogsArr.splice(index, 1);
  }

}
