import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.css']
})
export class ProfileuserComponent implements OnInit {

  @Input() user:User;
  constructor(public _userService: UserService) { }

  chatear(){
      this._userService.createChat(this.user)
      .subscribe(()=>console.log("OK"))
      
  }
  ngOnInit() {
    console.log(this.user);
  }

}
