import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Subject/BehaviorSubject';
import { AuthHttp } from '../auth/index';
import { contentHeaders, serializeQuery } from '../common/index';
import { Expense } from './expense.model';

@Injectable()
export class ExpenseService {
  public expense: Subject<Expense>;
  public expenses: Observable<Array<Expense>>;
  public filter: Subject<any>;
  private _authHttp: AuthHttp;
  private _expensesObserver: any;

  constructor(authHttp: AuthHttp) {
    this._authHttp = authHttp;
    this.expenses = new Observable(
      observer => {
        this._expensesObserver = observer
      }
    );
    this.filter = new BehaviorSubject<any>(null);
    this.expense = new BehaviorSubject<Expense>(null);
  }

  getAll(criteria?: any) {
    let query = '';

    if (criteria) {
      query = `?${serializeQuery(criteria)}`
    }

    this._authHttp
    .get(`/api/expenses${query}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((data) => {
      return data.map((expense) => {
        return new Expense(
          expense._id,
          expense.name,
          expense.currency,
          expense.amoun,
          expense.scaleFactor,
          expense.value,
          expense.user,
          expense.category,
          expense.createdAt
        );
      });
    }).subscribe((expenses: Array<Expense>) => {
      this._expensesObserver.next(expenses);
    }, err => console.error(err));
  }

  findById(id) {
    return this._authHttp
    .get(`/api/expenses/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((expense) => {
      return new Expense(
        expense._id,
        expense.name,
        expense.currency,
        expense.amoun,
        expense.scaleFactor,
        expense.value,
        expense.user,
        expense.category,
        expense.createdAt
      );
    });
  }

  create(expense) {
    let body = JSON.stringify(expense);

    return this._authHttp
    .post('/api/expenses', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((expense) => {
      return new Expense(
        expense._id,
        expense.name,
        expense.currency,
        expense.amoun,
        expense.scaleFactor,
        expense.value,
        expense.user,
        expense.category,
        expense.createdAt
      );
    });
  }

  update(expense) {
    let body = JSON.stringify(expense);

    return this._authHttp
    .put(`/api/expenses/${expense._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map((expense) => {
      return new Expense(
        expense._id,
        expense.name,
        expense.currency,
        expense.amoun,
        expense.scaleFactor,
        expense.value,
        expense.user,
        expense.category,
        expense.createdAt
      );
    });
  }

  delete(expense) {
    return this._authHttp
    .put(`/api/expenses/${expense._id}`, '', { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  getExpensesBalance(criteria?: any) {
    let query = '';

    if (criteria) {
      query = `?${serializeQuery(criteria)}`
    }

    return this._authHttp
    .get(`/api/expenses/balance${query}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
