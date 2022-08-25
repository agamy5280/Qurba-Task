import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryFilterComponent } from './products/category-filter/category-filter.component';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';
import { BreadcrumbsComponent } from './products/breadcrumbs/breadcrumbs.component';
import { ProductgridService } from './services/products-services/productgrid.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    SearchBarComponent,
    CategoryFilterComponent,
    ProductsGridComponent,
    BreadcrumbsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    
  ],
  providers: [ProductgridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
