import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
    	<nav>
		<span routerLink = "/">{{ title() }}</span>
		<ul>
			<li routerLink = "/task-list">TaskList</li>
		</ul>
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
	  nav {
		  width: 100%;
		  display: flex;
		  justify-content: space-between;
		  align-items: center;

		  >span {
			  cursor: pointer;
                                  &:hover {
                                          color: #777;
                                  }
		  }

		  ul {
			  list-style: none;
			  /* list-style-type: disc; */
		  }
			  li {
				  cursor: pointer;
				  &:hover {
					  color: #777;
				  }
			  }
	  }
  `]
})
export class Header {
	title = signal('My first Angular App');

}
