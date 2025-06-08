import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
    	<nav>
		My first Angular App
	</nav>
    </header>
  `,
  styles: [`
	  header {
		  display: flex;
		  padding-inline: 16px;
		  padding-block: 8px;
		  background-color: #333;
		  color: white;
		  align-items: center;
		  justify-content: space-between;

	  }
  `]
})
export class Header {

}
