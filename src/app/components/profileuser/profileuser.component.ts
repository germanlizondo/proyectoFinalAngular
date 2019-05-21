import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.css']
})
export class ProfileuserComponent implements OnInit {

  @Input() user:User;
  constructor(public _userService: UserService,
    public router:Router) { }

  chatear(){
      this._userService.createChat(this.user)
      .subscribe(()=>this.router.navigate(['/']));
      
  }
  ngOnInit() {
    console.log(this.user);
  }

}
