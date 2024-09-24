import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product.interface';
import { HttpClient, HttpClientModule,HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule], // Import CommonModule for *ngFor, *ngIf, etc.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [HttpClient],
})
export class ProductListComponent implements OnInit {
 products:Product[]=[];
  fetched: any;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getLoadData();
    this.getfetchedData();
  }
  
  //swagger
  getLoadData(){
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products:', this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Client-side error:', error.error.message);
          } else {
            console.error(`Server-side error: ${error.status} ${error.statusText}`);
            console.error('Error body:', error.error);
          }
        }
      }
    });
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

}


}
