import { Injectable } from '@angular/core';
import { ITodo } from './Models/i-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  urlApi:string="http://localhost:3000/todos";

  getAllTodos():Promise<ITodo[]>{
    return fetch(this.urlApi).then(res => res.json())
  }

  createTodo(todo:Partial<ITodo>):Promise<ITodo>{
    return fetch(this.urlApi,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  updateTodo(todo:ITodo):Promise<ITodo>{
    return fetch(this.urlApi+`/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  delete(id:number):Promise<ITodo>{
    return fetch(this.urlApi+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

  getById(id:number):Promise<ITodo>{
    return fetch(this.urlApi +`/${id}`).then(res => res.json())
  }

}

