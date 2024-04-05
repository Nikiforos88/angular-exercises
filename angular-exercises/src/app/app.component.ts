import { Component } from '@angular/core';
import { ExeroneComponent } from './components/exerone/exerone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExeroneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nikiforos';
}
