import { CurrentExchangeRate } from './../CurrentExchangeRate';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { AllCurrency } from '../AllCurrency';

@Injectable({
  providedIn: 'root',
})
export class CurrentRateService {
  private url = environment.currentExchangeAPI;

  constructor(private http: HttpClient) {}

  getMoeda(typeCurrency: string): Observable<AllCurrency[]> {
    const type = `${typeCurrency}-BRL`;
    return this.http.get<AllCurrency[]>(`${this.url}/${type}`).pipe(
      map((res: any) => {
        let t: [] = res;
        return t;
      })
    );
  }
}
