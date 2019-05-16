import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-findusers',
  templateUrl: './findusers.component.html',
  styleUrls: ['./findusers.component.css']
})
export class FindusersComponent implements OnInit {

  public form :FormGroup;
  public users: User[] = []

  constructor(public _userService: UserService) { 
    this.form = new FormGroup({
      nickname: new FormControl(null)
      
  });
  }

  ngOnInit() {
  }

  findUser(){
    this.users = []
    if(this.form.value.nickname!=""){
      this._userService.getUsers(this.form.value.nickname)
      .subscribe((data:any)=>{
        let user:User;
        for (let i = 0; i < data.users.length; i++) {
          user = new User();
          user.id =  data.users[i]._id;
          user.nickname =  data.users[i].nickname;
          user.email =  data.users[i].email;
          this.users.push(user);
          
        }
    })
  }
    
  }

}
