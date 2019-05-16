import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICE } from '../config/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  user: User;
  constructor(public http:HttpClient,public router: Router) {
    this.user = new User();
   this.cargarStorage();
   }

   isLogeado():boolean{
    return ((this.user.id.length > 5)? true:false)
}

cargarStorage(){
    if(localStorage.getItem('id')){
      this.user.id = localStorage.getItem('id');
      this.user.nickname = localStorage.getItem('nickname');
      this.user.email = localStorage.getItem('email');
    }else{
      this.user.id = '';
    }
}

logout(){
  this.user = null;
  localStorage.clear();
  this.router.navigate(['/login']);
}

   loginUser(user :User){
      this.user = user;
      let url = SERVICE + 'login';
      
              
      let body = new HttpParams();
      body = body.set("nickname",this.user.nickname);
      body = body.set("password",this.user.password);
     return this.http.post(url, body,{headers: this.headers});
   }

   getUsers(nickname:string){
    return this.http.get(SERVICE+'all-users/'+nickname,{headers: this.headers});
   }

   createChat(receptor:User){
      let body = new HttpParams();
      body = body.set("transmitor",this.user.id);
      body = body.set("receptor",receptor.id);
     return this.http.post(SERVICE+'new-chat', body,{headers: this.headers});
   }
}
