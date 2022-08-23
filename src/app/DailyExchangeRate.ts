export interface DailyExchangeRate {
  data: [
    {
      close: string;
      date: string;
      high: number;
      low: number;
      open: number;
    }
  ];
  from: string;
  lastUpdateAt: string;
  to: string;
}
