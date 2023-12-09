import { Component, ViewChild } from '@angular/core';
import { IRegister } from '../../../Models/i-register';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  @ViewChild('f', {static:true})

  form!:NgForm;

  emailRegex: RegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;


  isIncorrect(input:NgModel){
    return !input.value && input.dirty && input.touched
  }

  isEmail(input:NgModel){
    if(input.errors){
      return input?.errors['pattern'] && input.dirty
    }
    return false;
  }

  minLenghtPassword(input:NgModel){
    if (input.value.lenght <= 6){
      return input?.errors
    }
    return false
  }




  save(){
    let registerData:IRegister={
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authSvc.signUp(registerData)
    .subscribe(data => {
        this.router.navigate(['/auth/login'])
    })
  }

}
