import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryfilterService {

  categoriesNames: any[] = [];
  constructor(private http: HttpClient) { }

  // Function to get categories from the API
  getCategories() {
    this.http.get('https://dummyjson.com/products/categories').subscribe({
      next: (data) =>{
        this.categoriesNames.push(data);
      }
    })
  }
}
