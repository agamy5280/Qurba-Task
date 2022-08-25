import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { CategoryfilterService } from 'src/app/services/products-services/categoryfilter.service';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';


@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
  providers: [ProductgridService]
})
export class CategoryFilterComponent implements OnInit {
  categoriesList: any= [];
  selectedIndex: any = -1;
  constructor(private categoryfilter: CategoryfilterService, private productList: ProductgridService) {  
   }

  ngOnInit(): void {
    this.categoryfilter.getCategories();
    this.categoriesList = this.categoryfilter.categoriesNames;
  }
  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  changeSelection(event, category, index) {
    category = event.target.checked ? category : '';
    this.selectedIndex = event.target.checked ? index : undefined;
    this.emitter.emit(category);
  }
}
