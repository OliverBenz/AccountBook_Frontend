import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  page = {
    title: 'Add Account',

    email: {
      title: 'E-Mail *',
      value: '',
      error:{
        message: 'A valid email is required',
        hidden: true
      }
    },
    password: {
      title: 'Password *',
      value: '',
      error: {
        message: 'Please enter a password',
        hidden: true
      }
    },
    other: {
      title: 'Other',
      value: ''
    },
    date: ''
  }
  constructor() {
    // this.page.email.error.hidden = true;
    // this.page.password.error.hidden = true
  }

  ngOnInit() {
  }

  // TODO: Push data to database
  // Send data to database by input over "Enter" or Button klick
  SendAccount(email: string, password: string, other: string){
    // Check if empty
    if(email == ''){
      this.page.email.error.hidden = false;
    }
    if(password == ''){
      this.page.password.error.hidden = false;
    }

    // Check if filled out again
    if(email != ''){
      this.page.email.error.hidden = true;
    }
    if(password != ''){
      this.page.password.error.hidden = true;
    }

    // OK - ready for push
    if(email != '' && password != ''){
      this.page.email.value = email;
      this.page.password.value = password;
      this.page.other.value = other;
    }
  }
}
