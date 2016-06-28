import { Component, OnInit, OnDestroy } from 'angular2/core';
import { CategoryService } from '../category.service';
import { CategoryComponent } from './category.component';
import { Category } from '../category.model';

@Component({
    selector: 'category-list',
    directives: [CategoryComponent],
    template: `
      <div class="jumbotron center-block">
        <h2>List of all your categories</h2>
      </div>
      <div>
        <category *ngFor="#category of categories" [category]="category"></category>
      </div>
    `
})
export class CategoryListComponent implements OnInit, OnDestroy {
  public categories: Array<Category>;
  private _categoryService: CategoryService;
  private _categorySubscription: any;

  constructor(categoryService: CategoryService) {
    this._categoryService = categoryService;
  }

  ngOnInit() {
    this._categorySubscription = this._categoryService.category
    .subscribe((category) => {
      if (category) {
        this.categories.push(category);
      }
    });
    this._categoryService
    .getAll()
    .subscribe((categories) => {
      this.categories = categories;
    });
  }

  ngOnDestroy() {
    this._categorySubscription.unsubscribe();
  }
}
