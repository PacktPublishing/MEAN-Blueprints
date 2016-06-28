import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { ProductListComponent } from './product-list.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';

@RouteConfig([
  { path: '/', as: 'ProductList', component: ProductListComponent, useAsDefault: true },
  { path: '/:sku', as: 'ProductEdit', component: ProductEditComponent },
  { path: '/create', as: 'ProductCreate', component: ProductCreateComponent }
])
@Component({
    selector: 'product-component',
    directives: [
      ProductListComponent,
      RouterOutlet
    ],
    template: `
      <div class="col">
        <router-outlet></router-outlet>
      </div>
    `
})
export class ProductComponent {
  constructor() {}
}
