import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { FindusersComponent } from './components/findusers/findusers.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegistrerComponent },
  { path: 'findusers', component: FindusersComponent, canActivate:[LoginGuardGuard] },
  { path: 'user', component: EdituserComponent, canActivate:[LoginGuardGuard] },
  { path: '', component: HomeComponent, canActivate:[LoginGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
