import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';
import { DettaglioComponent } from './pages/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo :'homepage'
  },
  {
    path:"homepage",
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
  {
    path:"homepage/dettaglio/:id",
    component:DettaglioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
