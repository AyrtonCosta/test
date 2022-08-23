export class AllCurrency {
  ask!: string;
  bid!: string;
  code!: string;
  codein!: string;
  create_date!: Date;
  high!: string;
  low!: string;
  name!: any;
  pctChange!: string;
  timestamp!: string;
  varBid!: string;

  constructor(init: Partial<AllCurrency>) {
    Object.assign(this, init);
  }
}
