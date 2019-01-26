import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import 'rxjs/add/operator/map';

import { Todo } from '../models/Todo';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html' 
})

export class TodosComponent implements OnInit {
    todos: Todo[];

    constructor(private _todoService: TodoService){}

    ngOnInit(){
        this.todos = [];
        this._todoService.getTodos()
            .map(res => res.json())
            .subscribe(todos => this.todos = todos)
    }

    addTodo($event, todoText){
        // test for a click event
        if($event.which === 1) {
            var result;
            var newTodo = {
                text: todoText.value,
                isCompleted: false
            };

            result = this._todoService.saveTodo(newTodo);
            result.subscribe(x => {
                this.todos.push(x);
                todoText.value = '';
            });
        }
    }

    updateStatus(todo){
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        this._todoService.updateTodo(_todo)
            .map(res => res.json())
            .subscribe(data => {
                todo.isCompleted = !todo.isCompleted;
            });
    }

    setEditState(todo, state){
        if(state){
            todo.isEditMode = state
        } else {
            delete todo.isEditMode
        }
    }

    updateTodoText($event, todo){
        // On enter key press
        if($event.which === 13) {
            // Assign the text on todo from the value of the text box
            todo.text = $event.target.value
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isComplete: todo.isCompleted
            }

            this._todoService.updateTodo(_todo)
                .map(res => res.json())
                .subscribe(data => {
                    this.setEditState(todo, false)
                });
        }
    }

    deleteTodo(todo){
        var todos = this.todos;

        this._todoService.deleteTodo(todo)
            .map(res => res.json())
            .subscribe(data => {
                if(data.n == 1){
                    for(var i = 0;i < todos.length;i++){
                        if (todos[i]._id == todo._id){
                            todos.splice(i, 1);
                        }
                    }
                }
            })
    }
}