import { Component } from '@angular/core';
import { TodoService } from '../../todos.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: '.app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos:Todo[] = [];


  constructor( private todoSvc:TodoService){}

  newTodo:Partial<Todo>={
    completed:false
  }


  loading:boolean=false;
  loadingTodos:boolean=false;

  saveTodo(){
    this.loading=true;
    this.todoSvc.createTodo(this.newTodo).then(res=>{
      this.todos.push(res);
      this.newTodo = {
        title:"",
        completed:false
      }
      this.loading=false;
    })
  }

  ngOnInit(){
    this.loadingTodos=true;
    this.todoSvc.getAllTodos().then(t=>{
      this.todos=t.filter(el=>!el.completed)
      this.loadingTodos=false;
    }
    )
  }

  toggleComplete(todo:Todo){
    todo.completed = !todo.completed;
    this.todoSvc.updateTodo(todo).then(res=>{
      this.todos=this.todos.filter(el=>!el.completed)
    })
  }
}

