import { Component, DoCheck, OnInit } from '@angular/core';
import { WebSocketService } from '../../../services/web-socket.service';
import { GetDataService } from '../../../services/get-data.service';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, DoCheck {
  allMessages!: {}[];
  myUser!: User;

  constructor(
    public webSocketService: WebSocketService,
    public getData: GetDataService,
    public dataExchange: DataExchangeService
  ) {}

  ngOnInit(): void {
    this.dataExchange.user$.subscribe(res => (this.myUser = res));
    this.allMessages = this.webSocketService.chatMessages;
  }

  ngDoCheck() {
    this.dataExchange.SMS$.subscribe(res => {
      res.length >= 1
        ? (this.allMessages = res)
        : (this.allMessages = this.webSocketService.chatMessages);
    });

    const scrollWindow = document.querySelector('.messages-window');
    scrollWindow?.scroll({
      top: scrollWindow.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
