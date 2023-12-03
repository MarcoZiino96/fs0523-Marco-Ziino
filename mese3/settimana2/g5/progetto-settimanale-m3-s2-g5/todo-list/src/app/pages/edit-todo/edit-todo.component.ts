import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../todos.service';
import { ITodo } from '../../Models/i-todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent {
  constructor(
    private route: ActivatedRoute,
    private todoSvc: TodoService,
    private router:Router
  ) { }

  todo!: ITodo

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.todoSvc.getById(params.id).then(res => this.todo = res)
    })
  }

  saveTodo(){
    this.todoSvc.updateTodo(this.todo).then(res=>{
      setTimeout(()=>{
          this.router.navigate(['/'])
         },3000)
    })
  }
}
