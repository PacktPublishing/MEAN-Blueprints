import { Component, OnInit } from 'angular2/core';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
    selector: 'category-create',
    template: `
      <div>
        <form role="form" (submit)="onSubmit($event)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" [(ngModel)]="category.name" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description"
              name="description" [(ngModel)]="category.description">
            </textarea>
          </div>
          <button type="submit" class="button">Add</button>
        </form>
      </div>
    `
})
export class CategoryCreateComponent implements OnInit {
  public category: Category;
  public categories: Array<Category>;
  private _categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this._categoryService = categoryService;
  }

  ngOnInit() {
    this.category = new Category();
    this.categories = [];
  }

  onSubmit(event) {
    event.preventDefault();

    this._categoryService
    .create(this.category)
    .subscribe((category) => {
      this._categoryService.category.next(category);
      this.category = new Category();
    }, err => console.error(err));
  }
}
