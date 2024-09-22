import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
//import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';
import SockJS from 'sockjs-client';
//const SockJS = require('sockjs-client');

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private stompClient: any;
  private notificationSubject = new Subject<string>();

  constructor() {
    this.connect();
   }

   connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/notifications', (message: any) => {
        this.notificationSubject.next(message.body);
      });
    });
  }

  getNotifications() {
    return this.notificationSubject.asObservable();
  }
}
