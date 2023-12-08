import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../../Models/i-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService
  ){}

  loginData:ILogin ={
    email: '',
    password: ''
  }

  save(){
    this.authSvc.login(this.loginData)
    .subscribe(data=>{
      console.log(data);

    })
  }

}
