import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  public user$ = new Subject<User>();
  public SMS$ = new Subject<any>();

  public provideMyUser(user: any) {
    this.user$.next(user);
  }

  public provideSMS(sms: any) {
    this.SMS$.next(sms);
  }
}
