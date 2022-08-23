import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from 'src/app/services/current-rate.service';
import { CurrentExchangeRate } from 'src/app/CurrentExchangeRate';
import { AllCurrency } from 'src/app/AllCurrency';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  code: string = '';

  current!: AllCurrency[];

  constructor(private currentRate: CurrentRateService) {
    this.getCurrents();
  }

  ngOnInit(): void {}

  getCurrents() {
    this.currentRate
      .getMoeda(this.code)
      .subscribe((current) => console.log(current));
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
    console.log(this.current);
  }
}
