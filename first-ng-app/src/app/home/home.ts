import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  template: `
    <p>home works!</p>
    <app-greeting [message] = "homeMessage()"></app-greeting>
    <input type = "text" (keyup) = "keyUpHandler($event)">
  `,
  styles: ``
})
export class Home {
	homeMessage = signal('Hello World!');

	keyUpHandler(event:KeyboardEvent){
		console.log('user pressed the ${event.key}');
	}

}
