import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { NgForm } from '@angular/forms';
import { PostDataService } from '../../services/post-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() toggleWindow!: (bool: boolean) => void;
  @Input() isReg!: boolean;
  @Output() isRegChange = new EventEmitter<boolean>();
  userName!: any;
  user!: { id: string; name: string };

  constructor(
    public webSocketService: WebSocketService,
    public postData: PostDataService
  ) {}

  ngOnInit(): void {
    this.webSocketService.openWebSocketRegister;
  }

  ngOnDestroy() {
    this.webSocketService.closeWebSocket(
      this.webSocketService.openWebSocketRegister
    );
  }

  addUser(sendUser: NgForm) {
    this.userName = sendUser.value;
    this.postData
      .postNewUser('http://localhost:5000/api/user/register', this.userName)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.user = data;
        },
        error => console.log(error)
      );
    setTimeout(() => {
      this.isRegChange.emit(!this.isReg);
      localStorage.setItem('isReg', JSON.stringify(this.user));
    }, 1000);
  }

  ngDoCheck() {
    // console.log(this.webSocketService.newUser)
  }
}
