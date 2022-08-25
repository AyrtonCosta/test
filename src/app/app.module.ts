import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardCurrentExchangeRateComponent } from './components/card-current-exchange-rate/card.component';
import { CardDailyExchangeRateComponent } from './components/card-daily-exchange-rate/card-daily-exchange-rate.component';
import { CurrentRateService } from './services/current-rate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardCurrentExchangeRateComponent,
    CardDailyExchangeRateComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [CurrentRateService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
