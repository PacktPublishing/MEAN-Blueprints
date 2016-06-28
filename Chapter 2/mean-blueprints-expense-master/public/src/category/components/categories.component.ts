import { Component } from 'angular2/core';
import { CategoryListComponent } from './category-list.component';
import { CategoryCreateComponent } from './category-create.component';

@Component({
    selector: 'categories',
    directives: [
      CategoryCreateComponent,
      CategoryListComponent
    ],
    template: `
      <category-create></category-create>
      <category-list></category-list>
    `
})
export class CategoriesComponent {
  constructor() {}
}
