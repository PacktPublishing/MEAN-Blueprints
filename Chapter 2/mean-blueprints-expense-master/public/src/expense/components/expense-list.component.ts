import { Component, OnInit, OnDestroy } from 'angular2/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
    selector: 'expense-list',
    directives: [],
    template: `
      <div class="jumbotron center-block">
        <h2>List of all your expenses</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="#expense of expenses">
              <td>{{ expense.name }}</td>
              <td>{{ expense.category.name }}</td>
              <td>{{ expense.value }}</td>
              <td>{{ expense.createdAt | date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  public expenses: Array<Expense>;
  private _expenseService: ExpenseService;
  private _subscriptions: Array<any>;

  constructor(expenseService: ExpenseService) {
    this._expenseService = expenseService;
  }

  ngOnInit() {
    this.expenses = [];
    this._subscriptions = [];

    this._subscriptions.push(
      this._expenseService
      .expenses
      .subscribe((expenses) => {
        this.expenses = expenses;
      })
    );
    this._subscriptions.push(
      this._expenseService
      .expense
      .subscribe((expense) => {
        if (expense) {
          this.expenses.push(expense);
        }
      })
    );
    this._subscriptions.push(
      this._expenseService
      .filter
      .subscribe((filter) => {
        if (filter) {
          this._expenseService.getAll(filter);
        }
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
