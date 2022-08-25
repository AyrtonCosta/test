import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from 'src/app/services/current-rate.service';
import { CurrentExchangeRate } from 'src/app/CurrentExchangeRate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  code: string = '';

  current!: CurrentExchangeRate[];

  constructor(private currentRate: CurrentRateService) {}

  ngOnInit(): void {}

  getCurrents() {
    this.currentRate
      .getMoeda(this.code)
      .subscribe((current) => (this.current = current as []));
  }
}
