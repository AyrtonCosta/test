import { CurrentExchangeRate } from './../../CurrentExchangeRate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-current-exchange-rate',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardCurrentExchangeRateComponent implements OnInit {
  @Input() data!: CurrentExchangeRate;

  constructor() {}

  ngOnInit(): void {}
}
