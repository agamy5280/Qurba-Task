import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  productList: any;
  productsQuantity: number;
  searchParam: string;
  categoryParam: string;
  p: any; //currentPage for pagination

  constructor(private productService: ProductgridService, private route: ActivatedRoute) {}

  ngOnInit() {
      // Getting requested parameters from queryParams 
      this.route.queryParams.subscribe(params => {
      this.searchParam = params['search'];
      this.categoryParam = params['category'];

      // Getting product list according to user's request
      if (params['search']) {
        this.productService.updateProductsBySearch(this.searchParam).then(() => {
          this.productList = this.productService.productQuery['products'];
          this.productsQuantity = this.productService.productQuery['total'];
        })
      } else if (this.categoryParam) {
        this.productService.updateProductsByCategory(this.categoryParam).then(() => {
          this.productList = this.productService.productQuery['products'];
          this.productsQuantity = this.productService.productQuery['total'];
        })
      } else {
        this.productService.getAllProducts().then(() => {
          this.productList = this.productService.productQuery['products'];
          this.productsQuantity = this.productService.productQuery['total'];
        })
      }
    });
  }
}
