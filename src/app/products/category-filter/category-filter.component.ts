import { Component, EventEmitter, Injectable, Input, OnInit, Output, OnChanges } from '@angular/core';
import { CategoryfilterService } from 'src/app/services/products-services/categoryfilter.service';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
  providers: [ProductgridService]
})
export class CategoryFilterComponent implements OnInit {
  categoriesList: any = [];
  selectedIndex: any = -1;

  constructor(
    private categoryfilter: CategoryfilterService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
      _route.queryParams.subscribe(params => {
        if (!params['category']) {
          this.selectedIndex = -1;
        }
      });
    }

  ngOnInit(): void {
      this.categoryfilter.getCategories().then(() => {
      this.categoriesList = this.categoryfilter.categoriesList;
    });
  }
  // Function that receive binded values and navigate to requested category route
  changeSelection(event, category, index) {
    category = event.target.checked ? category : '';
    this.selectedIndex = event.target.checked ? index : undefined;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        category: category,
        // http://localhost:4200/products?category=category
      },
    });
  }
}
