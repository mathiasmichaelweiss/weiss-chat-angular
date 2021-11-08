import { Component, Input, DoCheck } from '@angular/core';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements DoCheck {
  @Input() user!: User;
  @Input() idx!: number;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {}
}
