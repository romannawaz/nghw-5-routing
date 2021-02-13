import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  BAD_WORDS_LIST: string[] = [];
  badWordsList: string;

  newBadWord: string;

  text = '';
  textFieldIsEmpty = false;

  constructor() { }

  ngOnInit(): void {
  }

  addNewBadWord(event: Event): void {
    event.preventDefault();

    if ((event.target as HTMLFormElement).checkValidity()) {
      this.newBadWord.split(' ').map((w) => this.BAD_WORDS_LIST.push(w));

      this.badWordsList = this.BAD_WORDS_LIST.join(' ');

      this.textFieldIsEmpty = false;
    }
    else {
      this.textFieldIsEmpty = true;
    }

    this.newBadWord = '';
  }

  cenzorFormSubmit(event: Event): void {
    event.preventDefault();

    this.text = this.text
      .trim()
      .split(' ')
      .map(word => {
        for (const badWord of this.BAD_WORDS_LIST) {
          if (word == badWord)
            return '*'.repeat(word.length)
        }

        return word;
      })
      .join(' ');
  }

  clearBadWordsList(): void {
    this.BAD_WORDS_LIST = [];
    this.badWordsList = '';
    this.textFieldIsEmpty = false;
  }
}
