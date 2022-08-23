import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDailyExchangeRateComponent } from './card-daily-exchange-rate.component';

describe('CardDailyExchangeRateComponent', () => {
  let component: CardDailyExchangeRateComponent;
  let fixture: ComponentFixture<CardDailyExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDailyExchangeRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDailyExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
