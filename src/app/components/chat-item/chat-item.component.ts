import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Chat } from 'src/app/models/chat.model';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() user:User;
  @Input() idChat:string;

  @Output() contacto: EventEmitter<User> = new EventEmitter();
  @Output() chatSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectChat(){
      this.chatSelected.emit(this.idChat);
      this.contacto.emit(this.user);
      
 }

}
