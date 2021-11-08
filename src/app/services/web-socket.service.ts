import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';
import { UserRegisterDto } from '../models/userRegisterDto';
import { GetDataService } from './get-data.service';
import { DataExchangeService } from './data-exchange.service';
import { User } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket!: WebSocket;
  webSocketSendMessage!: WebSocket;
  chatMessages: ChatMessageDto[] = [];
  userRegister: UserRegisterDto[] = [];
  userId: string = '';
  allUsers: User[] = [];
  allMessages: any;

  constructor(
    private getData: GetDataService,
    private dataExchange: DataExchangeService
  ) {}

  public openWebSocketRegister() {
    this.userId = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem('isReg')))
    ).id;
    this.webSocket = new WebSocket(
      `ws://localhost:5001/api/user/register?userid=${this.userId}`
    );

    this.webSocket.onmessage = event => {
      this.getData
        .get(this.getData.allUsersApi)
        .subscribe(res => (this.allUsers = res));
    };
  }

  public openWebSocketSendMessage() {
    this.userId = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem('isReg')))
    ).id;
    this.webSocketSendMessage = new WebSocket(
      `ws://localhost:5001/api/chat/message?userid=${this.userId}`
    );

    this.webSocketSendMessage.onmessage = event => {
      this.getData
        .get(this.getData.allMessagesApi, this.userId)
        .subscribe(res => {
          this.dataExchange.provideSMS(res);
        });
    };
  }

  public sendMessage(data: any) {
    this.getData
      .get(this.getData.allMessagesApi, this.userId)
      .subscribe(res => {
        this.dataExchange.provideSMS(res);
      });
  }

  public closeWebSocket(currentWebsocket: any): void {
    currentWebsocket.close();
  }
}
