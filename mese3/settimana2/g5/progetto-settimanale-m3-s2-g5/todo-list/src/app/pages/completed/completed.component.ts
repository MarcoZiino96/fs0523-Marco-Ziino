import { Component } from '@angular/core';
import { TodoService } from '../../todos.service';
import { ITodo } from '../../Models/i-todo';

@Component({
  selector: '.app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todos:ITodo[] = [];


  constructor(
    private todoSvc:TodoService
    ){}

  newTodo:Partial<ITodo>={
    completed:false
  }

  loadingTodos:boolean = false;
  loadingDelete:boolean=false;
  loadingToggle:boolean=false;

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

  toggleComplete(todo:ITodo){
    this.loadingToggle = true;
    todo.completed = !todo.completed;
    this.todoSvc.updateTodo(todo).then(res=>{
      this.todos=this.todos.filter(el=>el.completed)
      this.loadingToggle=false;
    })
  }
  deleteTodo(id:number|undefined){
    if(!id) return
    this.loadingDelete=true
    this.todoSvc.delete(id).then(res=>{
      this.todos=this.todos.filter(el=> el.id != id)
      this.loadingDelete=false;
    })
  }
}

