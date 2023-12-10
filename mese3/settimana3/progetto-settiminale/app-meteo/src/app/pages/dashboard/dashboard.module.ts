import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { FormsModule } from '@angular/forms';
import { FiveWheaterComponent } from './five-wheater/five-wheater.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PreferitiComponent,
    FiveWheaterComponent
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {

}
