import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DailyExchangeRate } from '../DailyExchangeRate';

@Injectable({
  providedIn: 'root',
})
export class CurrentDailyRateService {
  currentDaily!: DailyExchangeRate[];

  private url =
    'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA';

  constructor(private http: HttpClient) {}

  getCurrentDaily(
    fromSymbol: string,
    toSymbol: string
  ): Observable<DailyExchangeRate[]> {
    return this.http
      .get<DailyExchangeRate[]>(
        `${this.url}&from_symbol=${fromSymbol}&to_symbol=${toSymbol}`
      )
      .pipe(
        map((res: any) => {
          let currency = res.data;
          console.log(currency);
          return currency;
        })
      );
  }
}
