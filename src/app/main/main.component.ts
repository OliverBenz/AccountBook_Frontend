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

  private loadAccounts(){
    this.accountService.getAccounts();
    this.accountService.currentAccounts.subscribe(accounts => {
      if(accounts){
        this.accountList = accounts;
      }
      // TODO: If accounts.length = 0
    });
  }

  public addLike(id: number){
    // TODO: Add List of likes to cookies and check if activated
    // TODO: Remove dislike if exists
    alert(id);
  }

  public addDislike(id: number){
    // TODO: Add List of dislikes to cookies and check if activated
    // TODO: Remove like if exists

    alert(id);
  }
}
