import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductgridService {
  productQuery: any;

  constructor(private http: HttpClient) {}

  async updateProductsBySearch(search: string) {
    this.productQuery = (await this.http.get('https://dummyjson.com/products/search?q='+ search).toPromise());
  }
  
  async updateProductsByCategory(category: string) {
    this.productQuery = (await this.http.get('https://dummyjson.com/products/category/' + category).toPromise())
  }

  async getAllProducts() {
    this.productQuery = (await this.http.get('https://dummyjson.com/products?limit=100').toPromise());
  }


}
