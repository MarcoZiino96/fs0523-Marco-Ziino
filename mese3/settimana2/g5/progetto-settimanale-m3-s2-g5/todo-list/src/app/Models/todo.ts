import { ITodo } from "./i-todo";

export class Todo implements ITodo{
  id!:number;
  constructor(
   public title:string,
   public completed:boolean,
  ){

  }
}
