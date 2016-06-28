import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { ExpenseService } from '../expense.service';
import { CategoryService } from '../../category/index';
import { ExpenseCreateComponent } from './expense-create.component';
import { ExpenseListComponent } from './expense-list.component';
import { ExpenseBalanceComponent } from './expense-balance.component';
import { ExpenseFilterComponent } from './expense-filter.component';
@Component({
    selector: 'expenses',
    directives: [
      ExpenseCreateComponent,
      ExpenseListComponent,
      ExpenseBalanceComponent,
      ExpenseFilterComponent
    ],
    template: `
      <expense-balance></expense-balance>
      <expense-filter></expense-filter>
      <expense-create></expense-create>
      <expense-list></expense-list>
    `
})
export class ExpensesComponent implements OnInit {
  private _expenseService: ExpenseService;
  private _categoryService: CategoryService;

  constructor(
    expenseService: ExpenseService,
    categoryService: CategoryService
  ) {
    this._expenseService = expenseService;
    this._categoryService = categoryService;
  }

  ngOnInit() {
    this._categoryService.getAll().subscribe();
    this._expenseService.filter.next({});
  }
}
