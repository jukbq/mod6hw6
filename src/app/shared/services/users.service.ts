import { Injectable } from '@angular/core';
import { User } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public userArr :Array<User> =[
  {
id: 1,
username: 'afmin',
email: 'admin@gmail.com',
password: '123456'
  }
]
  constructor() { }
}
