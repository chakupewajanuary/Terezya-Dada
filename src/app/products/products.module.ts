import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductListComponent } from '../components/product-list/product-list.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers:[
    ProductService,
  ],
  exports:[]
})
export class ProductsModule { 


}
export class Product {
  constructor(
    public productId: number,
    public nameproductName: string,
    public productDescription: string,
    public productPrice: number,
    public productImageUrl: string
  ) {}
}
