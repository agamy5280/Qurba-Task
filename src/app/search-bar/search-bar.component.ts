import { Component, OnInit } from '@angular/core';
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
      // Resetting search bar after done searching
    _route.queryParams.subscribe(params => {
      if (!params['search']) {
        this.enteredSearchValue = '';
      }
    });
  }

  ngOnInit(): void {}

  // When new search happens navigate to this new search
  onSearchTextChanged() {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        search: this.enteredSearchValue,
      },
    });
  }
}
