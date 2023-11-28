import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PagePostAttiviComponent } from './pages/page-post-attivi/page-post-attivi.component';
import { PagePostInattiviComponent } from './pages/page-post-inattivi/page-post-inattivi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagePostAttiviComponent,
    PagePostInattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
