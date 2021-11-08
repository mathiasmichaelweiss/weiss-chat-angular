import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataExchangeService } from '../../../services/data-exchange.service';
import { WebSocketService } from '../../../services/web-socket.service';
import { GetDataService } from '../../../services/get-data.service';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.css']
})
export class ChatsListComponent implements OnInit {
  sub!: Subscription;
  list: any = [{ userName: 'Loading...' }];
  colors: { color: string }[] = [{ color: '#5bd8d0' }, { color: '#579c6d' }];
  users!: User[];
  myUser!: User;

  constructor(
    public getData: GetDataService,
    public dataExchange: DataExchangeService,
    public webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.webSocketService.allUsers.length > 0
      ? (this.users = this.webSocketService.allUsers)
      : null;

    const toParseMyUser = localStorage.getItem('isReg');
    this.myUser = JSON.parse(JSON.parse(JSON.stringify(toParseMyUser)));

    this.users = this.webSocketService.allUsers;
  }

  ngOnDestroy() {}

  ngDoCheck() {
    this.users = this.webSocketService.allUsers;
  }
}
