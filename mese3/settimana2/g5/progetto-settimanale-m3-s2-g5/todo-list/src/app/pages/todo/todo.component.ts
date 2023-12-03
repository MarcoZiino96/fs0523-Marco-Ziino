import { Component } from '@angular/core';
import { ITodo } from '../../Models/i-todo';
import { TodoService } from '../../todos.service';

@Component({
  selector: '.app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos:ITodo[] = [];


  constructor( private todoSvc:TodoService){}

  newTodo:Partial<ITodo>={
    completed:false
  }


  loading:boolean=false;
  loadingTodos:boolean=false;
  loadingDelete:boolean=false;
  loadingToggle:boolean=false;


  saveTodo(){
    if (this.newTodo.title == ""){
      return alert(" Compila il campo promemoria!")
    }else{
    this.loading=true;
    this.todoSvc.createTodo(this.newTodo).then(res=>{
      this.todos.push(res);
      this.newTodo = {
        title:"",
        completed:false
      }
      this.loading=false;
    })
  }}

  ngOnInit(){
    this.loadingTodos=true;
    this.todoSvc.getAllTodos().then(t=>{
      this.todos=t.filter(el=>!el.completed)
      this.loadingTodos=false;
    }
    )
  }

  toggleComplete(todo:ITodo){
    this.loadingToggle = true;
    todo.completed = !todo.completed;
    this.todoSvc.updateTodo(todo).then(res=>{
      this.todos=this.todos.filter(el=>!el.completed)
      this.loadingToggle=false;
    })
  }

  deleteTodo(id:number|undefined){
    if (!id)
    return
    this.loadingDelete=true
    this.todoSvc.delete(id).then(res=>{
      this.todos=this.todos.filter(el=> el.id != id)
      this.loadingDelete=false;
    })
  }
}


