import { Component, OnInit, OnDestroy } from 'angular2/core';
import { CategoryService, Category } from '../../category/index';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
    selector: 'expense-filter',
    template: `
      <div>
        <form role="form">
          <div class="form-group">
            <label for="startDate">Start</label>
            <input type="date" [(ngModel)]="filter.startDate" class="form-control" id="startDate">
          </div>
          <div class="form-group">
            <label for="endDate">End</label>
            <input type="date" [(ngModel)]="filter.endDate" class="form-control" id="endDate">
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select name="category" [(ngModel)]="filter.category">
              <option *ngFor="#category of categories" [value]="category._id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <button type="submit" class="button" (click)="onFilter($event)">Filter</button>
          <button type="button" class="button" (click)="onReset($event)">Reset</button>
        </form>
      </div>
    `
})
export class ExpenseFilterComponent implements OnInit, OnDestroy {
  public filter: any;
  public categories: Array<Category>;
  private _expenseService: ExpenseService;
  private _categoryService: CategoryService;
  private _subscriptions: Array<any>;

  constructor(
    expenseService: ExpenseService,
    categoryService: CategoryService
  ) {
    this._expenseService = expenseService;
    this._categoryService = categoryService;
  }

  ngOnInit() {
    this.filter = {};
    this.categories = [];
    this._subscriptions = [];
    this._subscriptions.push(
      this._categoryService
      .categories
      .subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  onFilter(event) {
    event.preventDefault();
    this._expenseService.filter.next(this.filter);
  }

  onReset(event) {
    event.preventDefault();
    this.filter = {};
    this._expenseService.filter.next(this.filter);
  }
}
