import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

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
   if(username != "" && password != ""){
     this.loginService.login(username, password);
   }
  }

  Register(username: string, email:string, password: string){
    if(username != "" && email != "" && password != ""){
      // More criteria for register like email format, password length, duplicate username
      this.loginService.register(username, email, password);
    }
  }
}
