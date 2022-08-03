import { Injectable } from '@angular/core';
import { User } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private userArr: Array<User> = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.com',
      password: '123456'
    }
  ]

  constructor() { }

  getUsers(): Array<User> {
    return this.userArr
  }

  addUser(user: User): void {
    this.userArr.push(user);
   console.log(this.userArr);
     }



}
