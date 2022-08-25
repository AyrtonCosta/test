import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from 'src/app/services/current-rate.service';
import { CurrentExchangeRate } from 'src/app/CurrentExchangeRate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public toCurrency: string = 'USD';

  public fromCurrency: string = 'BRL';

  public current!: CurrentExchangeRate;

  public toogle: boolean = true;

  constructor(private currentRate: CurrentRateService) {}

  public ngOnInit(): void {
    this.getCurrents();
  }

  public getCurrents() {
    this.showCard();
    this.currentRate
      .getMoeda(this.toCurrency)
      .subscribe((current) => (this.current = current));
  }

  public showCard(): void {
    this.toogle = !this.toogle;
  }
}
