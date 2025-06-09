import { Component } from '@angular/core';
import { TodoService } from '../services/todo';

@Component({
  selector: 'app-todos',
  imports: [],
  template: `
      @for(todo for todoItems(); track.id){
	      <p>{{todo.title}}</p>
      }
    
  `,
  styles: ``
})
export class Todos implements OnInit{
	todoService = inject(TodoService);
	todoItems = signal <Array<Todo>>([]);

	ngOnInit(): void{
		console.log(this.todoService.todoItems);
		this.todoItems.set(this.todoService.todoItems);	
	}

}
