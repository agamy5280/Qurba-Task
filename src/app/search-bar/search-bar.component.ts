import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  enteredSearchValue: string = '';

  constructor() {
  }
  ngOnInit(): void {
  }

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
    console.log("searchBarTXT:" + this.enteredSearchValue)
    // this.enteredSearchValue = ''
    // this.searchTextChanged.emit(this.enteredSearchValue);
  }
  emptySearchBar() {
    if(this.enteredSearchValue == '') {
      return
    }else {
      this.enteredSearchValue = ''
      this.searchTextChanged.emit(this.enteredSearchValue);
    }
  }
  
}
