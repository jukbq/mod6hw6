import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interface/blogs.interface';

import { BlogsService } from 'src/app/shared/services/blogs.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'mod6hw6';

  public blogs: Post[] = [];



  constructor(
      private serviceBlog: BlogsService,

  ){}
  ngOnInit(): void {
    this.blogs = this.serviceBlog.blogsArr
  }

}
