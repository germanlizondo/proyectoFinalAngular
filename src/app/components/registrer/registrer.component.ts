import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

  form :FormGroup;
  constructor(public _userService : UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nickname: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      password2: new FormControl(null,Validators.required)
  });
  }

  signupUser(){
    console.log(this.form.value);
      if(this.form.value.password==this.form.value.password2){
        
    let user = new User();
    user.nickname = this.form.value.nickname;
    user.email = this.form.value.email
    user.password = this.form.value.password;
    this._userService.signupUser(user)
    .subscribe((data:any)=>{
        console.log(data)
    })
      }
  }
}
