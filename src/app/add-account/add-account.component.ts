import { Account } from '../classes/account/account';

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) {
    // this.page.email.error.hidden = true;
    // this.page.password.error.hidden = true
  }

  ngOnInit() {
  }

  public SendAccount(username: string, password: string, website: string, info: string){
    var error = false;

    // Check if empty
    if(username == "" || password == "" || website == ""){
      error = true;
    }
  	
    if(error == false){
      // Make account object and push to history
      var dateOptions = {day: 'numeric', month: 'numeric', year: 'numeric'}; 
      var date = new Date().toLocaleString('de-AU', dateOptions);
      // TODO: Months with only one number: Add 0 in front
      
      let account: Account = new Account(0, website, username, password, date, info, 0, 0);
      
      this.accountService.sendAccounts(account);

      this.clearInput();
    }
  }

  public clearInput(){
    (<HTMLInputElement>document.getElementById('username')).value = "";
    (<HTMLInputElement>document.getElementById('password')).value = "";
    (<HTMLInputElement>document.getElementById('website')).value = "";
    (<HTMLInputElement>document.getElementById('other')).value = "";
  }
}
