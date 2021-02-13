import { Component, OnInit } from '@angular/core';
import { IWork } from './work.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  works: IWork[] = [
    {
      image: './assets/images/cenzorImage.png',
      title: 'Angular list of prohibited words',
      path: 'cenzor'
    },
    {
      image: './assets/images/userlistImage.png',
      title: 'Angular user list',
      path: 'userlist'
    },
    {
      image: './assets/images/phonebookImage.png',
      title: 'Angular phone book',
      path: 'phonebook'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
