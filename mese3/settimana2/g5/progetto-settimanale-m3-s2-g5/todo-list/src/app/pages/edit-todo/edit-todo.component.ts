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

  todo!: ITodo;
  loadEdit:boolean=false;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.todoSvc.getById(params.id).then(res => this.todo = res)
    })
  }

  saveTodo(){
    this.loadEdit=true;
    this.todoSvc.updateTodo(this.todo).then(res=>{
      this.loadEdit=false;
      setTimeout(()=>{
          this.router.navigate(['/'])
         },1500)
    })
  }
}
