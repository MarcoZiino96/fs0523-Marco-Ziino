import { Component } from '@angular/core';
import { IProduct } from '../../Moduls/i-product';
import { ProductService } from '../../product.service';

@Component({
  selector: '.app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

products:IProduct[]=[]

constructor(
  private productSvc:ProductService
){}

ngOnInit(){
 this.productSvc.shop$.subscribe(p=>{
  this.products.push(p);
 })
}

}
