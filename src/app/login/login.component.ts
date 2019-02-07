import { User } from './../classes/user/user';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  Login(username: string, password: string){
    if(username == ""){
      alert("Please insert a username");
    }
    else if(password == ""){
      alert("Please insert a password");
    }
    else{
      this.loginService.login(username, password);
    }
  }

  Register(username: string, email:string, password: string){
    if(username == ""){
      alert("Please insert a username");
    }
    else if(! email.includes("@") || ! email.includes(".")){
      alert("Invalid Email");
    }
    else if(password.length < 7){
      alert("Password not long enough");
    }
    else{
      let user = new User(email, username, password);
      this.loginService.register(user)
    }
  }
}
