import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  page = {
    title: 'Add Account',
    email: '',
    password: '',
    other: ''
  }
  constructor() { }

  ngOnInit() {
  }

  // TODO: Push data to database
  SendAccount(email: string, password: string, other: string){
    this.page.email = email;
    // TODO: hash password
    this.page.password = password;
    this.page.other = other;
  }

}
