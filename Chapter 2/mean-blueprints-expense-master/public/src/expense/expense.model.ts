export class Expense {
  _id: string;
  name: string;
  currency: string;
  amount: number;
  scaleFactor: number;
  value: string;
  user: string;
  category: any;
  createdAt: Date;

  constructor(
    _id?: string,
    name?: string,
    currency?: string,
    amount?: number,
    scaleFactor?: number,
    value?: string,
    user?: string,
    category?: any,
    createdAt?: string
  ) {
    this._id = _id;
    this.name = name;
    this.currency = currency;
    this.amount = amount;
    this.scaleFactor = scaleFactor;
    this.value = value;
    this.user = user;
    this.category = category;
    this.createdAt = new Date(createdAt);
  }
}
