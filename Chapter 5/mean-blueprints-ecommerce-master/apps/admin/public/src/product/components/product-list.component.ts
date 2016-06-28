import { Component, OnInit } from 'angular2/core';
import { ProductService } from '../product.service';
import { Router, RouterLink } from 'angular2/router';
import { Product } from '../product.model';

@Component({
    selector: 'product-list',
    directives: [RouterLink],
    template: `
      <div class="product-list row">
        <h2 class="col">Products list</h2>
        <div *ngIf="products.length === 0" class="empty-product-list col">
          <h3>Add your first product to you catalog</h3>
        </div>
        <div class="col col-25">
          <a href="#" [routerLink]="['ProductCreate']" class="add-product-sign">+</a>
        </div>
        <div *ngFor="#product of products" class="col col-25">
          <img src="http://placehold.it/208x140?text=product+image&txtsize=18" />
          <h3>
            <a href="#"
              [routerLink]="['ProductEdit', { sku: product.sku }]">
              {{ product.title }}
            </a>
            </h3>
        </div>
      </div>
    `
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];
  private _productService: ProductService;

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  ngOnInit() {
    this._productService.products.subscribe((products) => {
      this.products = products
    });
    this._productService.getAll();
  }
}
