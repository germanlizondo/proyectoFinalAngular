import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Messsage } from 'src/app/models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socket:Socket) { }

  joinRoom(id:string){
    this.socket.emit('join-room',id);
  }
  leaveRoom(id:string){
    this.socket.emit('leave-room',id);
  }

  emitMessage(data: any){
    this.socket.emit('new-mensaje',data);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}
}
