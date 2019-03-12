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
  show = {
    accounts: true,
    error: false
  }

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    var date = this.getDate();
    var account: Account = new Account(-1, "Loading.. ", "Loading.. ", "Loading.. ", date, "Loading.. ", 0, 0);

    this.accountList.push(account);
  }

  ngAfterContentInit(){
    this.loadAccounts();
  }

  private loadAccounts(){
    this.accountService.getAccounts();
    this.accountService.currentAccounts.subscribe(accounts => {
      if(accounts){
        if(accounts.length > 0){
          this.show.accounts = true;
          this.show.error = false;
          this.accountList = accounts;
        }
        else if(accounts.length == 0){
          var account: Account = new Account(-1, "Placeholder", "Placeholder", "Placeholder", date, "Placeholder", 0, 0);
          var date = this.getDate();
          this.accountList.push(account);

          this.show.accounts = false;
          this.show.error = true;
        }
      }
    });
  }

  public addLike(id: number){
    this.accountService.updateAccounts(this.getAccount(id), true);
    // TODO: Add List of likes to cookies and check if activated
    // TODO: Remove dislike if exists

    // Reload Accounts
    this.loadAccounts();
  }

  public addDislike(id: number){
    this.accountService.updateAccounts(this.getAccount(id), false);
    // TODO: Add List of dislikes to cookies and check if activated
    // TODO: Remove like if exists

    // Reload Accounts
    this.loadAccounts();
  }

  private getAccount(id){
    let acc: Account;
    for(let i = 0; i < this.accountList.length; i++){
      if (this.accountList[i].getId() == id){
        acc = this.accountList[i];
      }
    }
    return acc;
  }

  private getDate(){
    var dateOptions = {day: 'numeric', month: 'numeric', year: 'numeric'};
    return new Date().toLocaleString('de-AU', dateOptions);
  }
}