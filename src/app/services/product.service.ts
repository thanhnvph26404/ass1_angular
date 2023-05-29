import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products`)
  }

  getProduct(id: string | number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:3000/products`, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`http://localhost:3000/products/${product.id}`, product)
  }

  removeProduct(id: string | number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:3000/products/${id}`)
  }
}
