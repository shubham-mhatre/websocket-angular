import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private websocketService: WebsocketService,private toastr:ToastrService){

  }

  notifications:any[] = [

  ];

  ngOnInit(): void {

    this.websocketService.getNotifications().subscribe(message => {
      console.log("message "+message);
      this.notifications.push(message);
      //this.toastr.success(message, 'Notification');
      
    });
  }

  dismissNotification(index: number) {
    this.notifications.splice(index, 1);
}

dismissAllNotifications() {
    this.notifications = [];
}
  
}
