import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'action-labs';

  // public api!: Observable<any>;

  constructor() {}

  // ngOnInit() {
  //   this.http
  //     .get(
  //       'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,CAD-BRL'
  //     )
  //     .subscribe((d) => console.log(d));

  //   this.api = this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL');
  // }
}
