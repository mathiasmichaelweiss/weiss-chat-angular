import { Component, OnInit, Input } from '@angular/core';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() message: any;
  isAnswer: boolean = false;
  @Input() myUser!: User;

  constructor(private dataExchange: DataExchangeService) {}

  ngOnInit(): void {
    this.myUser.name === this.message.user.name
      ? (this.isAnswer = false)
      : (this.isAnswer = true);
  }

  ngDoCheck() {}
}
