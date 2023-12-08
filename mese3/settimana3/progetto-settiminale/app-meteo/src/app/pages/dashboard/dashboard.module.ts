import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PreferitiComponent } from './preferiti/preferiti.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PreferitiComponent
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {

}
