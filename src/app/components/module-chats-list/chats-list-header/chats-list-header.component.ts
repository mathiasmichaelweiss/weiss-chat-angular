import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chats-list-header',
  templateUrl: './chats-list-header.component.html',
  styleUrls: ['./chats-list-header.component.css']
})
export class ChatsListHeaderComponent implements OnInit {
  allUsers: User[] = [];
  usersCounter: number = 0;

  constructor(public getData: GetDataService) {}

  ngOnInit(): void {
    this.getData.get(this.getData.allUsersApi).subscribe(res => {
      this.allUsers = res;
    });
  }

  ngDoCheck() {
    this.usersCounter = this.allUsers.length;
  }
}
