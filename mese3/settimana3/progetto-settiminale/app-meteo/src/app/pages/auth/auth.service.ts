import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IAccessData } from '../Models/i-access-data';
import { IRegister } from '../Models/i-register';
import { Observable } from 'rxjs';
import { ILogin } from '../Models/i-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  registerUrl:string = environment.apiUrl + `/register`
  loginUrl:string = environment.apiUrl + `/login`


  singUp(data:IRegister):Observable<IAccessData>{
   return this.http.post<IAccessData>(this.registerUrl, data)
  }

  login(data:ILogin):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.loginUrl, data)
   }

}
