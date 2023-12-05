import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path: "",
    component:RegistrazioneComponent
  },

  {
    path: "login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
