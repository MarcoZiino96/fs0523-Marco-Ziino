import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path:"",
    component:TodoComponent
  },
  {
    path:"completed",
    component:CompletedComponent
  },
  {
    path:"edit-todo/:id",
    component:EditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
