import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.css']
})
export class LoginFieldComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public Login(username: string, password: string){
    if(username == ""){
      alert("Please insert a username");
    }
    else if(password == ""){
      alert("Please insert a password");
    }
    else{
      this.loginService.login(username, password);

      this.clearInput();
    }
  }

  private clearInput(){
    (<HTMLFormElement>document.getElementById('logForm')).reset()
  }
}
