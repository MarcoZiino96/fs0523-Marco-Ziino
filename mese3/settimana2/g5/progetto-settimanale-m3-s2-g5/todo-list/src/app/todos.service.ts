import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  urlApi:string="http://localhost:3000/todos";

  getAllTodos():Promise<Todo[]>{
    return fetch(this.urlApi).then(res => res.json())
  }

  createTodo(todo:Partial<Todo>):Promise<Todo>{

    return fetch(this.urlApi,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }
  updateTodo(todo:Todo):Promise<Todo>{
    return fetch(this.urlApi+`/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }


}

