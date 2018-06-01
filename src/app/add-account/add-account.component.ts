import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  page = {
    title: 'Add Account',
    date: '',
    username: {
      title: 'Username *',
      value: '',
      error:{
        message: 'A valid username is required',
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

    site: {
      title: 'Website *',
      value: '',
      error: {
        message: 'Please enter a website',
        hidden: true
      }
    },
    other: {
      title: 'Other',
      value: ''
    }
  }
  constructor() {
    // this.page.email.error.hidden = true;
    // this.page.password.error.hidden = true
  }

  ngOnInit() {
  }

  // TODO: Push data to database
  // Send data to database by input over "Enter" or Button klick
  SendAccount(username: string, password: string, other: string, site: string){
    // Check if empty
    if(site == ''){
      this.page.site.error.hidden = false;
    }
    if(username == ''){
      this.page.username.error.hidden = false;
    }
    if(password == ''){
      this.page.password.error.hidden = false;
    }


    // Check if filled out again
    if(username != ''){
      this.page.username.error.hidden = true;
    }
    if(password != ''){
      this.page.password.error.hidden = true;
    }
    if(site != ''){
      this.page.site.error.hidden = true;
    }

    // OK - ready for push
    if(username != '' && password != '' && site != ''){
      this.page.username.value = username;
      this.page.password.value = password;
      this.page.other.value = other;
      this.page.site.value = site;
    }
  }
}
