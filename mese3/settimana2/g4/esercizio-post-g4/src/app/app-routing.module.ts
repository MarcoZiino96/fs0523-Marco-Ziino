import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"active",
    component:ActiveComponent
  },
  {
    path:"inactive",
    component:InactiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
