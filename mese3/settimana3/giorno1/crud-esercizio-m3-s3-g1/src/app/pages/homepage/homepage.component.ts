import { ProductService } from '../../product.service';
import { IProduct } from '../../Moduls/i-product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  products:IProduct[]=[]

  constructor(
    private productSvc:ProductService
  ){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(data => this.products = data);
  }

  addToShop(product:IProduct){
    this.productSvc.addToShop(product)
  }

  addFavorite(product:IProduct){
    this.productSvc.addFavorite(product)
  }

}
