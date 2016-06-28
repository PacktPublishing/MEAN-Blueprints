import { Component } from 'angular2/core';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
    inputs: ['category'],
    selector: 'category',
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
        <button type="submit" class="button">save</button>
      </form>
    </div>
    `
})
export class CategoryComponent {
  public category: Category;
  private _categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this._categoryService = categoryService;
  }

  onSubmit(event) {
    event.preventDefault();
    this._categoryService.update(this.category)
    .subscribe((category) => {
      this.category = category;
    }, err => console.error(err));
  }
}
