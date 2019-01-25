import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LinkService } from './link.service';

// https://www.npmjs.com/package/js-sha256
import { sha256, sha224 } from 'js-sha256';
// https://www.npmjs.com/package/bcrypt
import * as bcrypt from 'bcryptjs';

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
    let sessionId = this.generateSessionId(username + email);

    let salt = bcrypt.genSaltSync(12);
    let passwordEnc = bcrypt.hashSync(password, salt);
    

    let body = JSON.parse('{"email": "' + email + '", "username": "' + username + '", "password": "' + passwordEnc + '", "sessionid": "' + sessionId + '"}');

    this.http.post(this._url, body, httpOptions).subscribe((data: any) => {
      // console.log(data);
    });
  }

  private generateSessionId(val){
    let cut = Math.round(val.length / 4);
    
    let string1 = val.slice(0, cut);
    let string2 = val.slice(3 * cut, val.length);
    
    let temp = sha256(string1 + string2);

    for(let i = Math.floor(Math.random() * 200) + 56; i >= 0; i--){
      let a = Math.floor(Math.random() * 256) + 1;
      temp = temp.slice(0, a) + temp.slice(a + 1);
    }

    return sha256(temp);
  }
}
