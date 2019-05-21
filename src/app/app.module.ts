import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { HomeComponent } from './home/home.component';

//services
import { UserService } from "./services/user.service";
import {LoginGuardGuard} from './services/guards/login-guard.guard'
import { ChatService } from './services/chat/chat.service';
import { MensajeComponent } from './components/mensaje/mensaje.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SERVICE } from './config/config';
import { LoadingComponent } from './components/loading/loading.component';
import { FindusersComponent } from './components/findusers/findusers.component';
import { ProfileuserComponent } from './components/profileuser/profileuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { GeolocalitzacioComponent } from './components/geolocalitzacio/geolocalitzacio.component';

//maps 
import { AgmCoreModule } from '@agm/core';

import { FileSelectDirective } from 'ng2-file-upload';
import { ModalimagesComponent } from './components/modalimages/modalimages.component';
const config: SocketIoConfig = { url: SERVICE, options: {} };



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ChatComponent,
    ChatItemComponent,
    LoginComponent,
    RegistrerComponent,
    HomeComponent,
    MensajeComponent,
    LoadingComponent,
    FindusersComponent,
    ProfileuserComponent,
    EdituserComponent,
    GeolocalitzacioComponent,
    FileSelectDirective,
    ModalimagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKaNEmH5WoRzNdhCF1pEVm61JaCg-flFU'
    })
  ],
  providers: [
    UserService,
    ChatService,
    LoginGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
