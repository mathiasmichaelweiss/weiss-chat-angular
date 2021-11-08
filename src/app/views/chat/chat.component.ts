import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataExchangeService} from "../../services/data-exchange.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() isReg!: boolean
  @Output() isRegChange = new EventEmitter<boolean>()

  constructor(
    private readonly dataExchangeService: DataExchangeService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }
}
