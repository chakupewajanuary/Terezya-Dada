import { Component,OnInit } from '@angular/core';
import { ProductService,Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('this is prod',this.products )
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}