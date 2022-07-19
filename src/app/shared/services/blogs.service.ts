import { Injectable } from '@angular/core';
import { Post } from '../interface/blogs.interface';



@Injectable({
  providedIn: 'root'


})
export class BlogsService {
public now = new Date().toLocaleString()
  public blogsArr :Array<Post> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      date: this.now,
      message: 'Sign up to cteate your account and start to user Angular Blog'
    }
  ];

  constructor() { }
}
