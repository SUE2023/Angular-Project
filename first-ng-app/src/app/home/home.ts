import { Component } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  template: `
    <p>home works!</p>
    <app-greeting></app-greeting>
  `,
  styles: ``
})
export class Home {

}
