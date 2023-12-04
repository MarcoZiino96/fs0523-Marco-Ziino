import { Component } from '@angular/core';
import { IProduct } from '../../Moduls/i-product';
import { ProductService } from '../../product.service';

@Component({
  selector: '.app-card-favourite',
  templateUrl: './card-favourite.component.html',
  styleUrl: './card-favourite.component.scss'
})
export class CardFavouriteComponent {

  products:IProduct[] = [];
  constructor(private productSvc:ProductService) {}

  ngOnInit(){
    this.productSvc.prefer$.subscribe(p => {
      this.products.push(p)
    })
  }
}
