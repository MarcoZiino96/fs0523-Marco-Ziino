import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostAttiviComponent } from './pages/page-post-attivi/page-post-attivi.component';
import { PagePostInattiviComponent } from './pages/page-post-inattivi/page-post-inattivi.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'page-post-attivi',
    component: PagePostAttiviComponent
  },
  {
    path:'page-post-inattivi',
    component: PagePostInattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
