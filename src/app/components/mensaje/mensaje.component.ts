import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Messsage } from 'src/app/models/message.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input() mensaje:Messsage;
  isMine: boolean = false;
  constructor(public _userService: UserService) { }

  ngOnChanges(changes: SimpleChange) {
    if(this.mensaje.author.id == this._userService.user.id) this.isMine = true
    else this.isMine = false;
  }


  ngOnInit() {
  }


}
