import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/products.module';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://freeapi.gerasim.in/api/amazon/GetAllProducts';
  private trial = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // from json api
  getData(): Observable<any> {
    return this.http.get(this.trial);
  }
}

// export interface Product {
//   nameproductName: string;
//   productDescription: string;
//   productImageUrl: string;
// }
// export interface ApiResponse {
//   status: boolean;
//   message: string;
//   data: Product[];
// }