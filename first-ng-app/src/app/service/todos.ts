import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class Todos {
	todoItems: Array<Todo> = [
		{
			title: 'groceries',
			id: 0,
			userId: 1,
			completed: false,
		},
		{
			title: 'jobsearch',
			id: 1;
			userId: 1,
			completed: false,
		},
		{
			title: 'learning',
			id: 2,
			userId: 1,
			completed: false,
		}.
	];

  constructor() { }
}
