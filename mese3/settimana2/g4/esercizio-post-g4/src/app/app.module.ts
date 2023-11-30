import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';
import { PostComponent } from './post/post.component';
import { IlightDirective } from './ilight.directive';
import { DettaglioComponent } from './pages/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ActiveComponent,
    InactiveComponent,
    PostComponent,
    IlightDirective,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
