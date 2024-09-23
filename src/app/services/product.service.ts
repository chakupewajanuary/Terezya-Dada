import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://freeapi.gerasim.in/api/amazon/GetAllProducts';
  // private base='https://projectapi.gerasim.in/api/CollegeProject';
  private trial = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
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