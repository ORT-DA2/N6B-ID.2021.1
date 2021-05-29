import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductServicesService } from './services/product-services.service';
import { FilterProductsPipe } from './components/product-list/pipes/filter-products.pipe';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterProductsPipe,
    ProductRowComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
