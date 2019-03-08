import { User } from './../classes/user/user';
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
  headers: new HttpHeaders({ }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "";
  private saltCount = 15;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private linkService: LinkService
  ) {
    this._url = this.linkService.getUserLink();
    httpOptions.headers = this.linkService.getHeader();
  }


  // -----------------------------------------
  //           Login
  // -----------------------------------------
  public login(username: string, password: string){
    this.http.get(this._url + "?filters[username][eq]=" + username, httpOptions).subscribe((data: any) => {
      // TODO: Fix compare: Not working properly
      if(data.data.length == 0){
        alert("Login failed: Not user with this username");
      }
      else{
        console.log(data);
        if(!bcrypt.compareSync(password, data.data[0].password)){
          alert("Login failed: Wrong password");
        }
        else{
          alert("Login successful");
          this.authService.storeUser(data.data[0].sessionid);
          location.reload();
        }
      }
    }, (error: any) => {
      console.log(error);
    });
  }

  // -----------------------------------------
  //           Register
  // -----------------------------------------
  public register(user: User){
    user.setSessionId(this.generateSessionId(user.getUsername().concat(user.getEmail())));

    let hash = bcrypt.hashSync(user.getPassword(), 8);
    console.log(user.getPassword());
    console.log(hash);
    user.setPassword(hash);
    this.postUser(user);
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

  private postUser(user: User){
    let body = JSON.parse('{"email": "' + user.getEmail() + '", "username": "' + user.getUsername() + '", "password": "' + user.getPassword() + '", "sessionid": "' + user.getSessionId() + '"}');
    this.http.post(this._url, body, httpOptions).subscribe((data: any) => {
      alert("Successfully registered");
    }, (error: any) =>{
      alert(error.error.error.message);
    });
  }
}
