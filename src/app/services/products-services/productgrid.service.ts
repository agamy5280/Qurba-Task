import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductgridService {
  categoryName: string = '';
  constructor(private http: HttpClient) {
   }

    // Function to request product details from the API
  async getProducts(category:string,searchTXT: string ) {

    if(category == "" && searchTXT == '') {
      return  (await this.http.get('https://dummyjson.com/products').toPromise())
    } else if(category != '' && searchTXT =='') {
      return  (await this.http.get('https://dummyjson.com/products/category/' + category).toPromise())
    } 
    else {
      // get all products
      return ( await this.http.get('https://dummyjson.com/products/search?q='+ searchTXT).toPromise())
    }
  }
  // Function to provide search results (products) based on user preference
  async getProductCategory(searchTXT) {
    return (await this.http.get('https://dummyjson.com/products/search?q='+ searchTXT).toPromise())
  }
}
