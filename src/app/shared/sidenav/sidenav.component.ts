import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Chat } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  user: User;
  chats: Chat[] = [];
  chatIdSelected : string;
  nickanameNavbar: string  = 'Selecciona Chat';

  constructor(public _userService: UserService,public _chatService: ChatService) {
    this.user = _userService.user;
   }

   recorrerChats(){
     this.chats.forEach(chat => {
     });
   }

   nameNavbar(event: string){
     this.nickanameNavbar = event;
   }
   
   getIdChatSelected(event:string){
     this.chatIdSelected = event;
   }
  ngOnInit() {

    this._chatService.getAllChats(this.user.id)
    .subscribe((resp:any)=>{

      var chat:Chat;
      var users:any[];
      var allchats:any[] = resp.chats;
      var user: User;
      for (let i = 0; i < allchats.length; i++) {
        chat = new Chat();
        chat.id = allchats[i]._id;
        users = allchats[i].usuarios;

        for (let x = 0; x < users.length; x++) {
          if(users[x]._id != this._userService.user.id){
            user = new User();
            user.id = users[x]._id;
            user.nickname = users[x].nickname;
            user.email = users[x].email;
            chat.addUser(user);
          }
        
        }
        
        
        this.chats.push(chat);
        
      }
      this.recorrerChats();
   
    })
  }

}
