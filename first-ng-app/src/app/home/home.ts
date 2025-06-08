import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  template: `
    <p>home works!</p>
    <app-greeting [message] = "homeMessage()"></app-greeting>
  `,
  styles: ``
})
export class Home {
	homeMessage = signal('Hello World!')

}
