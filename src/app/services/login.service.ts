import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LinkService } from './link.service';
// import * as bcrypt from 'bcryptjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer XeRXRIHehmB5NgafIyZp7UlmsL38suHk'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "";

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private linksService: LinkService
  ) {
    this._url = this.linksService.getUserLink();
  }


  // -----------------------------------------
  //           Login
  // -----------------------------------------
  public login(username: string, password: string){
  

    let sessionId = ""; // Get form API
    this.authService.storeUser(sessionId);
  }

  // -----------------------------------------
  //           Register
  // -----------------------------------------
  public register(username: string, email: string, password: string){
    let sessionId = this.generateSessionId();
    let passwordEnc = "123";

    let body = JSON.parse('{"id": "0", "email": "' + email + '", "username": "' + username + '", "password": "' + passwordEnc + '", "sessionid": "' + sessionId + '"}');

    this.http.post(this._url, body, httpOptions).subscribe((data: any) => {
      console.log(data);
    });
  }

  private generateSessionId(){

    return "sldkfjlsdnflLKJDFKRFJN";
  }
}
