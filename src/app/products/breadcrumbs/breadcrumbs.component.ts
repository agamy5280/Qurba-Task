import { Component } from '@angular/core';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  category:string
  searchTXT:string
  cat: string = '';
  txt: string = '';

  constructor(
    private productService: ProductgridService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    _route.queryParams.subscribe(() => {

      // To update breadcrumbs when toggling between search and selecting checkbox (category)
      const url = new URL(window.location.href);
      this.category = url.searchParams.get("category");
      this.searchTXT = url.searchParams.get("search");

      if (!this.category && !this.searchTXT) {
        this.txt = 'All Products';
        this.cat = '/' + ''
      } else if (this.category && !this.searchTXT) {
        this.txt = '';
        this.cat = '/' + ' ' + this.category
      } else if (!this.category && this.searchTXT) {
        this.txt = this.searchTXT;
        this.cat = '/' + ''
      } else {
        this.txt = this.searchTXT;
        this.cat = '/' + ''
      }
    });
  }
}
