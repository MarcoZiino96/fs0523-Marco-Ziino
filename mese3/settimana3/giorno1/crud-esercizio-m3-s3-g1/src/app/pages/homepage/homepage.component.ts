import { Component } from '@angular/core';
import { IProduct } from '../../Modules/i-product';
import { ProductService } from '../../product.service';

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
    this.productSvc.getAll().subscribe(data => this.products = data)
  }

}
