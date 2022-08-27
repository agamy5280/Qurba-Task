import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryfilterService {
  categoriesList: any = [];

  constructor(private http: HttpClient) { }

  // Function to get categories from the API
  async getCategories() {
    this.categoriesList = (await this.http.get('https://dummyjson.com/products/categories').toPromise());
  }
}
