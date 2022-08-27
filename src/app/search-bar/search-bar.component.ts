import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  enteredSearchValue: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    _route.queryParams.subscribe(params => {
      if (!params['search']) {
        this.enteredSearchValue = '';
      }
    });
  }

  ngOnInit(): void {
    const url = new URL(window.location.href);
    const searchParam = url.searchParams.get("search");
    this.enteredSearchValue = searchParam ?? '';

  }

  // Emit searched Text to parent component --> (products.component)
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        search: this.enteredSearchValue,
      },
    });
  }
}
