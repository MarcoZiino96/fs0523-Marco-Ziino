import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [

  {
    path:"",
    component: HomepageComponent
  },

  {
    path:"preferiti",
    component: PreferitiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
