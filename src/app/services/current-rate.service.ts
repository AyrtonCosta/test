import { CurrentExchangeRate } from './../CurrentExchangeRate';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentRateService {
  current!: CurrentExchangeRate;

  private url =
    'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA';

  constructor(private http: HttpClient) {}

  getMoeda(typeCurrency: string): Observable<CurrentExchangeRate> {
    const fromSymbol = `${typeCurrency}`;
    const toSymbol = 'BRL';
    return this.http
      .get<CurrentExchangeRate>(
        `${this.url}&from_symbol=${fromSymbol}&to_symbol=${toSymbol}`
      )
      .pipe(
        map((res: any) => {
          let currency = res;
          return currency;
        })
      );
  }
}
