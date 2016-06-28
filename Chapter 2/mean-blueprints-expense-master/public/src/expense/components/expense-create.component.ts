import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CategoryService, Category } from '../../category/index';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
    selector: 'expense-create',
    directives: [
      RouterLink
    ],
    template: `
      <div>
        <form role="form" (submit)="onSubmit($event)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" [(ngModel)]="expense.name" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select name="category" [(ngModel)]="expense.category">
              <option *ngFor="#category of categories" [value]="category._id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="value">Amount</label>
            <input type="text" [(ngModel)]="expense.value" class="form-control" id="value">
          </div>
          <button type="submit" class="button">Add</button>
        </form>
      </div>
    `
})
export class ExpenseCreateComponent implements OnInit, OnDestroy {
  public expense: Expense;
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
    this.expense = new Expense();
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

  onSubmit(event) {
    event.preventDefault();

    this._expenseService
    .create(this.expense)
    .subscribe((expense) => {
      this._expenseService.expense.next(expense);
    }, err => console.error(err));
  }
}
