import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ButtonModule } from 'primeng/button';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
