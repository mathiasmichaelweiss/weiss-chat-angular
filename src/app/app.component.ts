import { Component, DoCheck, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import { DataExchangeService } from './services/data-exchange.service';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  isReg: boolean = false;
  constructor(
    public getData: GetDataService,
    public dataExchange: DataExchangeService,
    public webSocketServer: WebSocketService
  ) {}

  ngOnInit(): void {
    localStorage.getItem('isReg') ? (this.isReg = true) : null;
  }

  ngDoCheck(): void {}
}
