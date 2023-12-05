import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {

  form!:FormGroup

  constructor(private fb: FormBuilder){}

  generi:string[] = [
    'uomo',
    'donna',
  ];

  ngOnInit(){

    this.form = this.fb.group({
      nome: this.fb.control(null,[Validators.required]),
      cognome: this.fb.control(null,[Validators.required]),
      password: this.fb.control(null,[Validators.required]),
      confPass: this.fb.control(null,[Validators.required]),
      genere: this.fb.control(null,[Validators.required]),
      imgProfilo: this.fb.control(null,[Validators.required]),
      biografia: this.fb.control(null,[Validators.required]),
      username: this.fb.control(null,[Validators.required])

    })
  }

  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName:string){
    return this.form.get(fieldName)?.touched
  }

  isValidAndTouched(fieldName:string){
    return this.isValid(fieldName) && this.isTouched(fieldName)
  }

}
