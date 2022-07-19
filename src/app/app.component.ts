import { Component } from '@angular/core';
import { Post } from './shared/interface/blogs.interface';
import { User } from './shared/interface/users.interface';
import { BlogsService } from './shared/services/blogs.service';
import { UsersService } from './shared/services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'mod6hw6';


  public blogs: Post[] = [];
  public users: User[] = []

  constructor(
    private serviceBlog: BlogsService,
    private serviceUser: UsersService
  ) { }

  ngOnInit(): void {
    this.blogs = this.serviceBlog.blogsArr
  }
}
