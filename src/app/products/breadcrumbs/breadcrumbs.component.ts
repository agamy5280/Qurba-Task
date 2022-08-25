import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductgridService } from 'src/app/services/products-services/productgrid.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() category:string
  @Input() searchTXT:string
  cat: string = '';
  txt: string = '';
  constructor(private productService: ProductgridService) { }

  ngOnInit(): void {
  }
  async ngOnChanges(): Promise<void> {

    if (this.category == '' && this.searchTXT == '') {
      this.txt = 'All Products';
      this.cat = '/' + ''
    } else if (this.category != '' && this.searchTXT == '') {
      this.txt = '';
      this.cat = '/' + ' ' + this.category
    } else if (this.category == '' && this.searchTXT != '') {
      this.txt = this.searchTXT;
      await this.productService.getProductCategory(this.searchTXT).then(data => this.cat = '/' + ' ' + data['products'][0].category + ' ' + '/')
    } else {
      this.txt = this.searchTXT;
      await this.productService.getProductCategory(this.searchTXT).then(data => this.cat = '/' + ' ' + data['products'][0].category + ' ' + '/')
    } 
  }
}