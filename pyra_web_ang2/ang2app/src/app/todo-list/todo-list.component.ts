import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'
import { Todo } from './todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo>
  constructor(private _toService: TodoListService) {
    
   }

  ngOnInit() {
    this.getTodos();
  }

  private getTodos(): void {
    this.todos = this._toService.getTodos();
  }

}
