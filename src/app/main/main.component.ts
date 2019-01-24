import { Account } from '../classes/account/account';

import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {
  accountList: Array<Account> = []; 

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    var dateOptions = {day: 'numeric', month: 'numeric', year: 'numeric'};
    var date = new Date().toLocaleString('de-AU', dateOptions);

    var aList: Array<Account> = [];
    var account: Account = new Account(-1, "Loading.. ", "Loading.. ", "Loading.. ", date, "Loading.. ", 0, 0);
    aList.push(account);

    this.accountList = aList;
  }

  ngAfterContentInit(){
    this.loadAccounts();
  }

  loadAccounts(){
    this.accountService.getAccounts('');
    console.log(this.accountList);
    this.accountService.currentAccounts.subscribe(accounts => {
      if(accounts){
        this.accountList = accounts;
        console.log(accounts);
      }
      // TODO: If accounts.length = 0
    });
  }
}
