export interface DailyExchangeRate {
  from: string;
  to: string;
  lastUpdateAt: Date;
  close: number;
  date: Date;
  high: number;
  low: number;
  open: number;
}
