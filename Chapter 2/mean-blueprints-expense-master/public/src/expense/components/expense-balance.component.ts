import { Component, OnInit, OnDestroy } from 'angular2/core';
import { ExpenseService } from '../expense.service';

@Component({
    selector: 'expense-balance',
    directives: [],
    template: `
      <h2>
        Total balance: {{ info.balance }}
        <span>from {{ info.count }}</span>
      </h2>
    `
})
export class ExpenseBalanceComponent implements OnInit, OnDestroy {
  public info: any;
  private _expenseService: ExpenseService;
  private _subscriptions: Array<any>;

  constructor(expenseService: ExpenseService) {
    this._expenseService = expenseService;
  }

  ngOnInit() {
    this.info = {};
    this._subscriptions = [];

    this._subscriptions.push(
      this._expenseService
      .filter
      .subscribe((filter) => {
        if (filter) {
          this._getBalance(filter);
        }
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  private _getBalance(filter) {
    this._expenseService
    .getExpensesBalance(filter)
    .subscribe((balance) => {
      this.info = balance;
    });
  }
}
