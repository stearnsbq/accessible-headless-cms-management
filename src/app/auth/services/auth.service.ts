import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _accessToken = new BehaviorSubject(localStorage.getItem('access_token') ?? '');
  public $accessToken = this._accessToken.asObservable();
  public get accessToken(){
    return this._accessToken.value;
  }
  public set accessToken(token: string){
    this._accessToken.next(token);
    localStorage.setItem('access_token', token)
  }

  constructor() { }


  public loginWithGoogle(){
    const url = `${environment.COGNITO_URL}/oauth2/authorize?response_type=token&client_id=${environment.COGNITO_CLIENT_ID}`
    
    window.location.href = url;
  }


  public isLoggedIn(){
    return !!this.accessToken?.length;
  }


}
