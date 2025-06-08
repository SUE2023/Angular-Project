import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  template: `
    <app-greeting [message] = "homeMessage()"></app-greeting>
    <app-counter></app-counter>
    <input placeholder = "Type something..." type = "text" (keyup) = "keyUpHandler($event)">
  `,
  styles: [`
	  input{
		  margin-top: 10px;
	  
	  }`]
})
export class Home {
	homeMessage = signal('Hello World!');

	keyUpHandler(event:KeyboardEvent){
		console.log('user pressed the ${event.key}');
	}

}
