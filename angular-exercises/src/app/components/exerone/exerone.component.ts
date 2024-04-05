import { Component } from '@angular/core';

@Component({
  selector: 'app-exerone',
  standalone: true,
  imports: [],
  templateUrl: './exerone.component.html',
  styleUrl: './exerone.component.css'
})
export class ExeroneComponent {
  person = {
    givenName: 'Nikiforos'
  }
}
