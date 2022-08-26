import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  category: string = '';
  searchText: string = '';
  ngOnInit(): void {
  }
  send(category){
    this.category=category;
  }
  onSearchTextEntered(searchText: string) {
    this.searchText = searchText;
  }
}
