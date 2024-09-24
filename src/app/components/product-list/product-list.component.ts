import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../products/products.module';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor, *ngIf, etc.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; 
  fetched: any;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.getfetchedData();
  }
  
  //swagger
fetchProducts() {
  this.productService.fetchProducts().subscribe({
    next: data => {
      console.log('Data:', data);
      this.products=data;
    },
    error: err => {
      console.error('Error:', err);
    },
  });
  console.log(this.products)
}
//fetch data from json 
getfetchedData(){
  this.productService.getData().subscribe({
    next: data => {
      console.log('Data:', data);
      this.fetched=data;
    },
    error: err => {
      console.error('Error:', err);
    },
  
  });
  console.log(this.fetched)
}

}




// //  (data) => {
//   this.products = data;
// },
// (error) => {
//   console.error('Error fetching products:', error);
// }



                        // swagger part
// (data) => {
//   this.products = data.map(item => new Product(item.productId, item.nameproductName, item.productDescription, item.productPrice, item.productImageUrl));
//   console.log(this.products); // Log the fetched products
// },
// (error) => {
//   console.error('Error fetching products:', error); // Handle errors
// }