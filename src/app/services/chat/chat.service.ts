import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICE } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public http: HttpClient) {
   }

   getAllChats(id:string){
  
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let url = SERVICE + 'get-chat/'+id;

      return this.http.get(url,{headers:headers});
   }

   getMessagesOfChat(id:string){
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let url = SERVICE + 'get-message/'+id;
    
    return this.http.get(url,{headers:headers});

   }
}
