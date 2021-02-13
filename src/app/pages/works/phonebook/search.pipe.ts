import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrUsers: IUser[], field: string): IUser[] {
    if (!field) {
      return arrUsers;
    }
    if (!isNaN(+field)) {
      return arrUsers.filter(user => user.phone.includes(field.trim()));
    }

    return arrUsers.filter(
      user => user.firstname.toLocaleLowerCase().includes(field.toLocaleLowerCase().trim()) || user.lastname.toLocaleLowerCase().includes(field.toLocaleLowerCase().trim())
    )
  }

}
