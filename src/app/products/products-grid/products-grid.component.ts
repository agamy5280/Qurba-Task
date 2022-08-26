import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit,OnChanges {
  allProductList: any;
  constructor(private productService: ProductgridService) {}
  p:any;
  // Receive values (category, searched text) from parent component --> (products.component)
  @Input() category:string
  @Input() searchTXT:string
  ngOnInit(): void {
    
  }
  // Sending category name or searched text to ProductGridService using getProducts function inside it
 async ngOnChanges(): Promise<void> {
  await this.productService.getProducts(this.category, this.searchTXT).then(data => this.allProductList=data['products']);
}
}
