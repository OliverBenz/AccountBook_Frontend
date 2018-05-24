import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  page = {
    title: "Login"
  };

  form = {
    username: {
      title: 'Username',
      error:{
        message: 'A valid username is required',
        hidden: true
      }
    },
    password: {
      title: 'Password',
      error:{
        message: 'A valid password is required',
        hidden: true
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  SendLogin(username: string, password: string){
    // Check if empty
    if(username == ''){
      this.form.username.error.hidden = false;
    }
    if(password == ''){
      this.form.password.error.hidden = false;
    }

    // Check if filled out again
    if(username != ''){
      this.form.username.error.hidden = true;
    }
    if(password != ''){
      this.form.password.error.hidden = true;
    }

    // OK - ready for push
    if(username != '' && password != ''){
      // Check if admin
      if (username == 'admin' && password == 'admin'){
        // redirect to account.html
      }
    }
  }

}
