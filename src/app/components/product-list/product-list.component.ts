import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor, *ngIf, etc.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  product: any;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(
      (data)=>{
        this.products = data;
      },
      
    )    
    console.log(this.products);
    
    this.productService.getData().subscribe({
      next: data => {
        console.log('Data:', data);
        this.product=data;
      },
      error: err => {
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
    console.log(this.product)
  }
}




// //  (data) => {
//   this.products = data;
// },
// (error) => {
//   console.error('Error fetching products:', error);
// }