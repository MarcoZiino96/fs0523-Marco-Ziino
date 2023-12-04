import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './Moduls/i-product';
import { Observable, Subject, map } from 'rxjs';

type responseData={
  products :IProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string="https://dummyjson.com/products";

  subjectaddshop:Subject<IProduct> = new Subject()
  shop$ = this.subjectaddshop.asObservable()

  favoriteSubject:Subject<IProduct> = new Subject()
  prefer$=this.favoriteSubject.asObservable()

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<responseData>(this.apiUrl)
    .pipe(map(r=> r.products))
  }

  addToShop(product:IProduct){
    this.subjectaddshop.next(product)
  }

  addFavorite(product:IProduct){
    this.favoriteSubject.next(product);
  }
}
