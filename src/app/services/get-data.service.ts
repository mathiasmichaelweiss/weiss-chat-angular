import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public allUsersApi: string = 'http://localhost:5000/api/user';
  public allMessagesApi: string = 'http://localhost:5000/api/chat/message?';
  constructor(private httpClient: HttpClient) {}

  public get(url: string, userId?: string): Observable<any> {
    let link;
    userId ? (link = `${url}userid=${userId}`) : (link = url);
    return this.httpClient.get(link);
  }
}
