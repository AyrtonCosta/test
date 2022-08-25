import { Component, Input, OnInit } from '@angular/core';
import { DailyExchangeRate } from 'src/app/DailyExchangeRate';
import { CurrentDailyRateService } from 'src/app/services/current-daily-rate.service';

@Component({
  selector: 'app-card-daily-exchange-rate',
  templateUrl: './card-daily-exchange-rate.component.html',
  styleUrls: ['./card-daily-exchange-rate.component.css'],
})
export class CardDailyExchangeRateComponent implements OnInit {
  @Input()
  public fromSymbol!: string;

  @Input()
  public toSymbol!: string;

  public currentDaily: DailyExchangeRate[] = [];

  @Input()
  public toogle: boolean = false;

  constructor(private dailyExchange: CurrentDailyRateService) {}

  public ngOnInit(): void {}

  public getCurrentDaily() {
    this.toogle = !this.toogle;
    this.dailyExchange
      .getCurrentDaily(this.fromSymbol, this.toSymbol)
      .subscribe((dailyExchange) => (this.currentDaily = dailyExchange));
  }

  public closeDif(open: number, close: number): number {
    return open / close;
  }

  public showCards(): string {
    return this.toogle ? '-' : '+';
  }
}
