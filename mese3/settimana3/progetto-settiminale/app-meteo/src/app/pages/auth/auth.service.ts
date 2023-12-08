import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IAccessData } from '../Models/i-access-data';
import { IRegister } from '../Models/i-register';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ILogin } from '../Models/i-login';
import { JwtHelperService } from '@auth0/angular-jwt';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSub = new BehaviorSubject<IAccessData|null>(null);

  user$ = this.authSub.asObservable();
  isLog$ = this.user$.pipe(map(user => !!user));

  constructor(
    private http:HttpClient,
    private router:Router
  ) {

    this.restoreUser()
  }

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

      this.autoLogout(data.accessToken)

    }))
   }

   autoLogout(jwt:string){
    let expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    let expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logOut()
    },expMs)
  }

   logOut(){
    this.authSub.next(null);
    localStorage.removeItem('accesData');
    this.router.navigate(['/auth/login']);
   }

   restoreUser(){

    let userJson:string|null = localStorage.getItem('accessData')
    if(!userJson) return;

    let accessData:IAccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.autoLogout(accessData.accessToken)
    this.authSub.next(accessData)
   }

}
