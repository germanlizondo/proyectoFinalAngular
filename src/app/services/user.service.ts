import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICE } from '../config/config';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';

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
      if(localStorage.getItem('img')===null){
        this.user.img ='assets/images/profile.png';
      }else{
        this.user.img = localStorage.getItem('img');
      }

    }else{
      this.user.id = '';
    }
}

logout(){
  this.user = null;
  localStorage.clear();
  this.router.navigate(['/login']);
}

encryptPassword(password: string): string{
  let sha = sha256.create();
  sha.update(password)
  return sha.hex();
}

   loginUser(user :User){
      this.user = user;
      this.user.password = this.encryptPassword(user.password);
      let url = SERVICE + 'login';        
      let body = new HttpParams();
      body = body.set("nickname",this.user.nickname);
      body = body.set("password",this.user.password);
     return this.http.post(url, body,{headers: this.headers});
   }


    signupUser(user:User){
      let body = new HttpParams();
      let url = SERVICE + 'new-user'; 
      body = body.set("nickname",user.nickname);
      body = body.set("password",this.encryptPassword(user.password));
      body = body.set("email",user.email);
      
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

   
   cargarImage(fileToUpload: File):any {
    const endpoint = SERVICE+'uploadprofileimage';
    const formData: FormData = new FormData();
    formData.append('profileimage', fileToUpload);
    formData.append('id',this.user.id);
    console.log(formData)
    return this.http.post(endpoint, formData, { headers: this.headers });
   
      
}

    getAllimages(){
      return this.http.get(SERVICE+'getimages',{headers: this.headers});

    }

    updateImage(img:string){
      let body = new HttpParams();
      let url = SERVICE + 'cambia-img'; 
      body = body.set("img",img);
      body = body.set("user",this.user.id);
      return this.http.post(url, body,{headers: this.headers});

    }
}
