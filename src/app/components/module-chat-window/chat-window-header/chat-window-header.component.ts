import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chat-window-header',
  templateUrl: './chat-window-header.component.html',
  styleUrls: ['./chat-window-header.component.css']
})
export class ChatWindowHeaderComponent implements OnInit {
  myUser!: User;

  constructor() {}

  ngOnInit(): void {
    const toParseMyUser = localStorage.getItem('isReg');
    this.myUser = JSON.parse(JSON.parse(JSON.stringify(toParseMyUser)));
  }

  ngDoCheck() {}
}
