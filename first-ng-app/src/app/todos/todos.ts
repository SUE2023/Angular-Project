import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../service/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  template: `
    <div *ngFor="let todo of todoItems()">
      <p>{{ todo.title }}</p>
    </div>
  `,
  styles: ``
})
export class TodosComponent implements OnInit {
  todo = inject(Todos);
  todoItems = signal<Todo[]>([]);

  ngOnInit(): void {
    const todos = this.todo.todoItems(); // unwrap signal
    console.log(todos);
    this.todoItems.set(todos);
  }
}

