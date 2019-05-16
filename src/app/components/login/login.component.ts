import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form :FormGroup;

  constructor(
    public _userService :UserService,
    public router:Router
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
        nickname: new FormControl(null,Validators.required),
        password: new FormControl(null,Validators.required)
    });
  }


 
 
  loginUser(){

    let user = new User();
    user.nickname = this.form.value.nickname;
    user.password = this.form.value.password;

   
    this._userService.loginUser(user)
    .subscribe((resp : any) =>{
      
      localStorage.setItem('id',resp._id);
      localStorage.setItem('nickname',resp.nickname);
      localStorage.setItem('email',resp.email);

       window.location.href='/';
       
    })

  
  }

}
