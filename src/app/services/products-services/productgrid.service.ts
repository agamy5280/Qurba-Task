import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductgridService {
  categoryName: string = '';
  constructor(private http: HttpClient) {
   }

  async getProducts(category:string,searchTXT: string ) {

    if(category == "" && searchTXT == '') {
      return  (await this.http.get('https://dummyjson.com/products').toPromise())
    } else if(category != '' && searchTXT =='') {
      return  (await this.http.get('https://dummyjson.com/products/category/' + category).toPromise())
    } 
    else {
      return ( await this.http.get('https://dummyjson.com/products/search?q='+ searchTXT).toPromise())
    }
  }

  async getProductCategory(searchTXT) {
    return (await this.http.get('https://dummyjson.com/products/search?q='+ searchTXT).toPromise())
  }
}
