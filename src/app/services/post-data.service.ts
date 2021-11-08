import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  public allMessagesApi: string = 'http://localhost:5000/api/chat/message?';

  constructor(private httpClient: HttpClient) {}

  public postNewUser(url: string, user: { name: string }) {
    const body = { name: user.name };
    return this.httpClient.post(url, body);
  }

  public postNewMessage(
    url: string,
    message: { userId: string; message: string }
  ) {
    const body = { userId: message.userId, messageContent: message.message };
    const link = `${url}userid=${message.userId}`;
    return this.httpClient.post(link, body);
  }
}
