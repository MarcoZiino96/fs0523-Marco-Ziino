import { Component } from '@angular/core';
import { TodoService } from '../../todos.service';
import { Todo } from '../../Models/todo';


@Component({
  selector: '.app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todos:Todo[] = [];


  constructor( private todoSvc:TodoService){}

  newTodo:Partial<Todo>={
    completed:false
  }

  loadingTodos:boolean = false;

  saveTodo(){
    this.todoSvc.createTodo(this.newTodo).then(res=>{
      this.newTodo = res;
      this.todos.push(res);
    })

  }

  ngOnInit(){
    this.loadingTodos=true;
    this.todoSvc.getAllTodos().then(t=>
      {this.todos=t.filter(el=>el.completed)
       this.loadingTodos=false;
      }
      );
  }

  toggleComplete(todo:Todo){
    todo.completed = !todo.completed;
    this.todoSvc.updateTodo(todo).then(res=>{
      this.todos=this.todos.filter(el=>el.completed)
    })
  }
}

