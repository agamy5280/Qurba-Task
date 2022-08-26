import { Component, EventEmitter, Injectable, Input, OnInit, Output, OnChanges } from '@angular/core';
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
  
  // Selected index is the given index on the checked box default value = -1 to make all checkboxs unchecked at page load
  selectedIndex: any = -1;
  @Input() searchTXT:string
  
  constructor(private categoryfilter: CategoryfilterService, private productList: ProductgridService) {}

  //  Requesting categories names from categoryfilterService
  ngOnInit(): void {
    this.categoryfilter.getCategories();
    this.categoriesList = this.categoryfilter.categoriesNames;
  }

  // Function to emit category selected from checkboxs
  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  changeSelection(event, category, index) {
    category = event.target.checked ? category : '';
    this.selectedIndex = event.target.checked ? index : undefined;
    this.emitter.emit(category);
  }
  
  // Resetting checked box
  ngOnChanges() {
    if(this.searchTXT != '') {
      this.selectedIndex = -1
    }
  }
}
