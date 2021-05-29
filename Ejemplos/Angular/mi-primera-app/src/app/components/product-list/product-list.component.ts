import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private productService: ProductServicesService, private router: Router) {
    this.products = this.productService.getProducts();
    this.filterValue = "";
  }

  products: Product[];
  filterValue: string;

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  goToDetail() {
    this.router.navigateByUrl('/products')
  }

}
