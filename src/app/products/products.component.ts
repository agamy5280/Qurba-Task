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
  // Function to receive category
  receiveCategory(category){
    this.category=category;
  }
  // Function to receive searched text from searchBar component
  onSearchTextEntered(searchText: string) {
    this.searchText = searchText;
  }
}
