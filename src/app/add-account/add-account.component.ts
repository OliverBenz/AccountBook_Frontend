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
      error: 'A valid email is required'
    },
    password: {
      title: 'Password *',
      value: '',
      error: 'Please enter a password'
    },
    other: {
      title: 'Other *',
      value: ''
    }
  }
  constructor() { }

  ngOnInit() {
  }

  // TODO: Push data to database
  SendAccount(email: string, password: string, other: string){
    if(email != '' && password != '' && other != '' ){
      this.page.email.value = email;
      this.page.password.value = password;
      this.page.other.value = other;
    }
  }
}
