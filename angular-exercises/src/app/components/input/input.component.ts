import { Component } from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from '../odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  value: string = '';
  userInput: string = '';

  submit() {
    if ( this.value.length % 2 === 0 ) {
      console.log('odd')
    } else {
      console.log('even')
    }
    this.value = '';
  }

  onUserInput(event: Event) {
    this.value= (event.target as HTMLInputElement).value;
    this.userInput = this.value;
  }
}
