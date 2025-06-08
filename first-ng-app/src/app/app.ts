import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header/>
    <main>
    	<app-home/>
    </main>
  `,
  styles: ['
	  main {
		  padding-inline: 16px;
	  }
	  '],
})
export class App {
  protected title = 'first-ng-app';
}
