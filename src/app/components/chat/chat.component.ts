import { Component, OnInit, Input, SimpleChange, OnDestroy, DoCheck, AfterContentChecked, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Messsage } from '../../models/message.model';
import { User } from 'src/app/models/user.model';
import { SocketService } from 'src/app/services/socket/socket-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { stringify } from '@angular/core/src/render3/util';
import { RsaService } from 'src/app/services/rsa.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() idChat:string = null; 
  @ViewChild('chatelement') chatElement :ElementRef;
  public mensajesArray: Messsage[] = []
  public form :FormGroup;
  public sendedMessage: Messsage;
  public loading:boolean;
 
  

  constructor(
    public _userService: UserService,
    public _chatService: ChatService,
    public _socketService: SocketService,
  ) { 
    
     
      this.loading = false;

    }

    scrollToBottom(): void {
      try {
      
     //     this.chatElement.nativeElement.scrollTop = this.chatElement.nativeElement.scrollHeight;
      } catch(err) { 
        console.log(err)
      }                 
  }

//sockets
  joinRoom(){
    this._socketService.joinRoom(this.idChat);
  }
  sendMessage(){
      let data = {}
      this.sendedMessage = new Messsage();
      this.sendedMessage.content = this.form.value.message;
      this.sendedMessage.author = this._userService.user;
      data = {
        room: this.idChat,
        message: this.sendedMessage
      }
      this._socketService.emitMessage(data);
      this.mensajesArray.push(this.sendedMessage);
      this.form.reset();
    this.scrollToBottom();
  }

  //http

  petitionHttpChat(){
    this._chatService.getMessagesOfChat(this.idChat)
    .subscribe((resp:any)=>{
      this.mensajesArray = [];
      var mensajes:any = resp.chats.mensajes;

      var mensaje:Messsage;
      var author:User;
      for (let i = 0; i < mensajes.length; i++) {
         mensaje = new Messsage();
        author = new User();
     
        mensaje.content = mensajes[i].content;
        mensaje.date = mensajes[i].date;
        author.nickname = mensajes[i].author.nickname;
        author.id = mensajes[i].author._id;
        mensaje.author = author;


        this.mensajesArray.push(mensaje);
        this.loading = false;
      }

    })
  }

  ngOnChanges(changes: SimpleChange) {
    if(this.idChat!=null){
    this.scrollToBottom();
      this.petitionHttpChat();
      this.joinRoom();
    }
 
}
  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(),
  });

  this._socketService.getMessages()
  .subscribe((data)=>{
     
    let mensaje = new Messsage();
    let author = new User();
   mensaje.content = data.content;
   mensaje.date = data.date;
    author.nickname = data.author.nickname;
    author.id = data.author.id;
    mensaje.author = author;
    this.mensajesArray.push(mensaje);
    this.scrollToBottom();

  })
  }


}
