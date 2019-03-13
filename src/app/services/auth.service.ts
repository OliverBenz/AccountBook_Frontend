import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookieService: CookieService
  ) { }

  public storeUser(sessionId: string){
    this.cookieService.set('sessionId', sessionId);
  }
  public checkUser(){
    return this.cookieService.check('sessionId');
  }
  public getUser(){
    return this.cookieService.get('sessionId');
  } 
}