import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  inputText;
  appState = 'default';
  oldInputText;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    var newTodo = {
      text: this.inputText
    };
    this.todos.push({
      text: this.inputText
    });

    this._todoService.addTodo(newTodo);
  }

  deleteTodo(todoText) {
    for(var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(todoText);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.inputText = todo.text;
    this.oldInputText = todo.text;
  }

  updateTodo() {
    for(var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldInputText) {
        this.todos[i].text = this.inputText;
      }
    }
    this._todoService.updateTodo(this.oldInputText, this.inputText);
  }
}
