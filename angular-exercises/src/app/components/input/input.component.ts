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
  oddValue: string = '';
  evenValue: string = '';
  oddData: string = '';
  evenData: string = '';
  userInput: string = '';
  
  submit() {
    if (this.value.length % 2 === 0) {
      this.evenData = this.value;
    } else {
      this.oddData = this.value;
    }
  }
    
  onUserInput(event: Event) {
    this.value= (event.target as HTMLInputElement).value;
    if ( this.value.length % 2 === 0 ) {
      this.evenValue = this.value;
      this.oddValue = " ";
    } else {
      this.oddValue = this.value
      this.evenValue = " ";
    }
    this.userInput = this.value;
  }
}
