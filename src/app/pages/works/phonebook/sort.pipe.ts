import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrUsers: IUser[], field: string, order: boolean): IUser[] {
    if (!field) {
      return arrUsers;
    }

    arrUsers.sort((a, b) => a[field] > b[field] ? 1 : -1)

    return order ? arrUsers : arrUsers.reverse();
  }

}
