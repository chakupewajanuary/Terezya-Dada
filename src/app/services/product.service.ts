import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://freeapi.gerasim.in/api/amazon/GetAllProducts';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
export interface Product {
  nameproductName: string;
  productDescription: string;
  productImageUrl: string;
}
export interface ApiResponse {
  status: boolean;
  message: string;
  data: Product[];
}