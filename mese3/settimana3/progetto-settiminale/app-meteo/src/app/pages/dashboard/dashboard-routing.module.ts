import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { FiveWheaterComponent } from './five-wheater/five-wheater.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:"preferiti", component: PreferitiComponent},
  {path:'fiveWeather/:id', component:FiveWheaterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
