import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SocketService } from 'src/app/services/socket/socket-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-geolocalitzacio',
  templateUrl: './geolocalitzacio.component.html',
  styleUrls: ['./geolocalitzacio.component.css']
})
export class GeolocalitzacioComponent implements OnInit {
  @Input() idUser:User;
  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  chatSeleccionado: boolean;
  constructor(public _socketService: SocketService) {
    this.chatSeleccionado = false;
    console.log(this.chatSeleccionado)
   }

  ngOnInit() {
   
    this._socketService.getGeolocation()
    .subscribe((data:any)=>{
     this.lat =  data.latitude;
     this.lng = data.longitud;
    })
  }

  ngOnChanges(changes: SimpleChange): void {

    if(this.idUser.id!=undefined){

      this.title = this.idUser.nickname;
      this._socketService.joinGeolocation(this.idUser.id);
      this.chatSeleccionado = true;
      console.log(this.chatSeleccionado)

    }
    
  }

}
