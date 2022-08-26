import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  enteredSearchValue: string = '';
  constructor() {}

  ngOnInit(): void {}

  // Emit searched Text to parent component --> (products.component)
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  // Clear search box after typing
  emptySearchBar() {
    if(this.enteredSearchValue == '') {
      return
    }else {
      this.enteredSearchValue = ''
      this.searchTextChanged.emit(this.enteredSearchValue);
    }
  }
}
