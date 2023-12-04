import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './Modules/i-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string="https://dummyjson.com/products";

  constructor(private http:HttpClient) {}

  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl);
  }
}
