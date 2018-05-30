import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  page = {
    login: {
      title: "Login",
      username: {
        title: "Username",
        error:{
          message: 'A valid username is required',
          hidden: true
        }
      },
      password: {
        title: "Password",
        error:{
          message: 'A valid password is required',
          hidden: true
        }
      }
    },
    register:{
      title: "Register",
      username: "Username *",
      password: "Password *",
      email: "E-Mail *",
      // Security question ?
    }
  }
  LoginData = {
    username: "",
    password: ""
  }
  RegisterData = {
    username: "",
    password: "",
    email: ""
  }

  constructor() { }

  ngOnInit() {
  }

  Login(username: string, password: string){
    // Check if empty
    if(username == ''){
      this.page.login.username.error.hidden = false;
    }
    if(password == ''){
      this.page.login.password.error.hidden = false;
    }

    // Check if filled out again
    if(username != ''){
      this.page.login.username.error.hidden = true;
    }
    if(password != ''){
      this.page.login.password.error.hidden = true;
    }
    
    // OK - Check with account database
    if(username != '' && password != ''){
      this.LoginData.username = username;
      this.LoginData.password = password;
    }
  }

  Register(){

  }
}
