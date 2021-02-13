import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  userList: IUser[] = [
    {
      firstname: 'Pavlo',
      lastname: 'Pavliv',
      phone: '0977770000'
    },
    {
      firstname: 'Sofia',
      lastname: 'Zhuk',
      phone: '0977777777'
    },
    {
      firstname: 'Ira',
      lastname: 'Tytar',
      phone: '0636666666'
    },
    {
      firstname: 'Vasylyna',
      lastname: 'Vrublevska',
      phone: '0635555555'
    },
    {
      firstname: 'Alejando',
      lastname: 'Del Rio Albrechet',
      phone: '0633333333'
    },
    {
      firstname: 'Petro',
      lastname: 'Petriv',
      phone: '0631222222'
    },
    {
      firstname: 'Petya',
      lastname: 'Zhuk',
      phone: '0631111111'
    },
  ]

  field: string = null;

  sortField: string;
  order = {
    firstname: false,
    lastname: false,
    phone: false
  };

  userFirstName: string;
  userLastName: string;
  userPhoneNumber: string;

  editStatus: boolean;
  editUserIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  setSort(field: string): void {
    this.sortField = field;

    this.order[field] = !this.order[field];
  }

  resetForm(): void {
    this.userFirstName = '';
    this.userLastName = '';
    this.userPhoneNumber = '';
  }

  addUser(): void {
    let newUser: IUser = {
      firstname: this.userFirstName,
      lastname: this.userLastName,
      phone: this.userPhoneNumber
    }

    if (!this.editStatus) {
      this.userList.push(newUser);
    }
    else {
      this.userList.splice(this.editUserIndex, 1, newUser);

      this.editStatus = false;
      this.editUserIndex = null;
    }

    this.resetForm();
  }

  editUser(index: number): void {
    let { firstname, lastname, phone } = this.userList[index];

    this.userFirstName = firstname;
    this.userLastName = lastname;
    this.userPhoneNumber = phone;

    this.editStatus = true;
    this.editUserIndex = index;
  }

  deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }

}
