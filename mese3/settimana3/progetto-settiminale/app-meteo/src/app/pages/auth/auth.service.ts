import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IAccessData } from '../Models/i-access-data';
import { IRegister } from '../Models/i-register';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ILogin } from '../Models/i-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSub = new BehaviorSubject<IAccessData|null>(null);

  user$ = this.authSub.asObservable();
  ilLog$ = this.user$.pipe(map(user => !!user));

  constructor(
    private http:HttpClient
  ) { }

  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login'


  signUp(data:IRegister):Observable<IAccessData>{
   return this.http.post<IAccessData>(this.registerUrl, data)
  }

  login(data:ILogin):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.loginUrl, data)
    .pipe(tap(data=>{
      this.authSub.next(data);
      localStorage.setItem('accesData', JSON.stringify(data));
    }))
   }

   restorUser(){

    let userJson:string|null = localStorage.getItem('accesData')
    if(!userJson) return;

    let accesData:IAccessData = JSON.parse(userJson)
   }

}
