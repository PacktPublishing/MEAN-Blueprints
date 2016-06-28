export class Money {
  amount: number;
  currency: string;
  display: string;
  factor: number;

  constructor(
    amount?: number,
    currency?: string,
    display?: string,
    factor?: number
  ) {
    this.amount = amount;
    this.currency = currency;
    this.display = display;
    this.factor = factor;
  }
}
