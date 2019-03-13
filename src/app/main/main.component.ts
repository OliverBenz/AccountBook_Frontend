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
      }
    });
  }

  public addLike(id: number){
    // Increase Likes from selected Account
    var acc: Account = this.getAccount(id);
    acc.incLikes();
    this.accountService.updateAccounts(acc);
    // TODO: Add List of likes to cookies and check if activated
    // TODO: Remove dislike if exists
  }

  public addDislike(id: number){
    // Increase Dislikes from selected Account
    var acc: Account = this.getAccount(id);
    acc.incDislikes();

    this.accountService.updateAccounts(acc);
    // TODO: Add List of dislikes to cookies and check if activated
    // TODO: Remove like if exists
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