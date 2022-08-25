export interface CurrentExchangeRate {
  exchangeRate: number;
  fromSymbol: string;
  lastUpdatedAt: Date;
  success: boolean;
  toSymbol: string;
}
