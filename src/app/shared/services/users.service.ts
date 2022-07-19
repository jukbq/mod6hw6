import { Injectable } from '@angular/core';
import { User } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public userArr :Array<User> =[
  {
id: 1,
username: '',
email: '',
password: ''
  }
]
  constructor() { }
}
