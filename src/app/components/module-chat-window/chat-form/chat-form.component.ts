import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../../../services/web-socket.service';
import { GetDataService } from 'src/app/services/get-data.service';
import { PostDataService } from 'src/app/services/post-data.service';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit, OnDestroy {
  myUser: User = JSON.parse(
    JSON.parse(JSON.stringify(localStorage.getItem('isReg')))
  );

  constructor(
    public webSocketService: WebSocketService,
    public getData: GetDataService,
    public postData: PostDataService,
    public dataExchange: DataExchangeService
  ) {}

  ngOnInit(): void {
    this.dataExchange.provideMyUser(this.myUser);
    this.webSocketService.openWebSocketRegister();
    this.webSocketService.openWebSocketSendMessage();
  }

  ngOnDestroy() {
    this.webSocketService.closeWebSocket(this.webSocketService.webSocket);
  }

  sendMessage(sendForm: NgForm) {
    const message = {
      userId: this.myUser.id,
      message: sendForm.value.message
    };

    this.postData
      .postNewMessage(this.postData.allMessagesApi, message)
      .subscribe(
        (data: any) => {},
        error => console.log(error)
      );

    this.getData
      .get(this.getData.allMessagesApi, this.myUser.id)
      .subscribe(res => {
        this.webSocketService.sendMessage([...res, message]);
      });

    sendForm.reset();
  }
}
