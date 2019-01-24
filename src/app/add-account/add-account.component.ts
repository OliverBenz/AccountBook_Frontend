import { Account } from '../classes/account/account';

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  accountHistory: Array<Account> = [];

  constructor(
    private accountService: AccountService
  ) {
    // this.page.email.error.hidden = true;
    // this.page.password.error.hidden = true
  }

  ngOnInit() {
  }

  SendAccount(username: string, password: string, website: string, info: string){
    var error = false;

    // Check if empty
    if(username == "" || password == "" || website == ""){
      error = true;
    }
  	
    // Check if already added
    for (let i = 0; i < this.accountHistory.length; i++){
      // If account already posted - error
      if(this.accountHistory[i].getUsername() == username && this.accountHistory[i].getPassword() == password && this.accountHistory[i].getWebsite() == website){
        error = true;
      }
    }

    if(error == false){
      // Make account object and push to history
      var dateOptions = {day: 'numeric', month: 'numeric', year: 'numeric'}; 
      var date = new Date().toLocaleString('de-AU', dateOptions).split('.').join("-");
      // TODO: Months with only one number: Add 0 in front
      console.log(date);

      let account: Account = new Account(0, website, username, password, date, info, 0, 0);
      
      this.accountHistory.push(account);
      this.accountService.sendAccounts(account);
    }
  }
}
