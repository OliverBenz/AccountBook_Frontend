import { User } from './../../classes/user/user';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-field',
  templateUrl: './register-field.component.html',
  styleUrls: ['./register-field.component.css']
})
export class RegisterFieldComponent implements OnInit {

  constructor(
    private loginService: LoginService 
  ) { }

  ngOnInit() {
  }

  public Register(username: string, email:string, password: string){
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

      this.clearInput();
    }
  }

  private clearInput(){
    (<HTMLFormElement>document.getElementById('regForm')).reset()
  }
}
