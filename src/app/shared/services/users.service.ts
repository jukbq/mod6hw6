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

  private activeUser = ''

  constructor() { }

  getUsers(): Array<User> {
    return this.userArr

  }
  getAciveUser(): string  {
    return this.activeUser
  }


  addUser(user: User): void {
    this.userArr.push(user);
   
  }
  addAciveUser(active: string): void {
this.activeUser = active
  }

}
