import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../shared/interface/users.interface';
import { UsersService } from '../shared/services/users.service';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(userArr: User[], field: string): User[] {
    if(!userArr) return[];
    if(!field) return userArr;
    return userArr.filter(user => user.username.toLowerCase().includes(field.toLowerCase()));
  }

}
