import { Injectable } from '@angular/core';
import Todo from './todo';

@Injectable()
export class TodoListService {

  constructor() { }

  getTodos(): Array<Todo> {
    return [
      new Todo({name: 'zakupy', done: true}),
      new Todo({name: 'umyc okna', done: false}),
      new Todo({name: 'Piwo', done: false})
    ];
  }

}
