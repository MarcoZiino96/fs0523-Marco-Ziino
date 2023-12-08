import { Component } from '@angular/core';
import { IRegister } from '../../Models/i-register';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData:IRegister={
    nome:"",
    cognome:"",
    email:"",
    password:""
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  save(){
    this.authSvc.signUp(this.registerData)
    .subscribe(data => {
        this.router.navigate(['/auth/login'])

    })
  }

}
