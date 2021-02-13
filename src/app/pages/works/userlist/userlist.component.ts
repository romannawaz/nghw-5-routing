import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  USERS: IUser[] = [
    {
      login: 'Ivan',
      password: 'navi',
      email: 'ii@gmail.com'
    },
    {
      login: 'Petro',
      password: 'petropetriv',
      email: 'pp@gmail.com'
    }
  ];

  userLogin: string = '';
  userPassword: string = '';
  userEmail: string = '';

  editStatus: boolean;
  editUserId: number;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(e: Event): void {
    e.preventDefault();

    if ((e.target as HTMLFormElement).checkValidity()) {
      let newUser: IUser = {
        login: this.userLogin,
        password: this.userPassword,
        email: this.userEmail
      }

      this.USERS.push(newUser);

      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';

      if ((e.target as HTMLElement).classList.contains('was-validated'))
        (e.target as HTMLElement).classList.remove('was-validated');
    }
    else {
      (e.target as HTMLElement).classList.add('was-validated');
    }
  }

  deleteUser(id: number): void {
    this.USERS.splice(id, 1);
  }

  editUser(id: number): void {
    this.editUserId = id;
    let { login, password, email } = this.USERS[this.editUserId];

    this.userLogin = login;
    this.userPassword = password;
    this.userEmail = email;

    this.editStatus = true;
  }

  saveChanges(e: Event): void {
    e.preventDefault();

    if ((e.target as HTMLFormElement).checkValidity()) {
      let newUser: IUser = {
        login: this.userLogin,
        password: this.userPassword,
        email: this.userEmail
      }

      this.USERS[this.editUserId] = newUser;

      this.editUserId = null;
      this.editStatus = false;

      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';

      if ((e.target as HTMLElement).classList.contains('was-validated'))
        (e.target as HTMLElement).classList.remove('was-validated');
    }
    else {
      (e.target as HTMLElement).classList.add('was-validated');
    }
  }
}
