import { LinkService } from './link.service';
import { Account } from '../classes/account/account';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer XeRXRIHehmB5NgafIyZp7UlmsL38suHk'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject<any>("");
  currentAccounts = this.accountSource.asObservable();

  private url = "";

  constructor(
    private http: HttpClient,
    private linkService: LinkService
  ) {
    this.url = this.linkService.getAccountLink();
  }


  // -----------------------------------------
  //           Get Accounts
  // -----------------------------------------
  getAccounts(filter: string){
    var accountList: Array<Account> = [];

    this.http.get<any>(this.url, httpOptions).subscribe(data => {
      for(let i = 0; i < data.length; i++){
        var account: Account = new Account(
          data[i].ID,
          data[i].website,
          data[i].username,
          data[i].password,
          data[i].date,
          data[i].info,
          data[i].likes,
          data[i].dislikes
        );
      }

      // --------- Calculate Rating ---------
      accountList = this.calcRating(accountList);

      // --------- Sort Accounts ---------
      accountList = this.sortAccounts(accountList);

      // --------- Push Accounts ---------
      this.accountSource.next(accountList);
    });
  }

  // -----------------------------------------
  //           Send Accounts
  // -----------------------------------------
  sendAccounts(account){
    let body = JSON.parse('{"ID": 0, "website": "' + account.getWebsite() + '", "date": "' + account.getDate() + '", "user": "' + account.getUsername() + '", "password": "' + account.getPassword() + '", "info": "' + account.getInfo() + '", "likes": 0, "dislikes": 0}');
    console.log(body);
       // {
    //   "ID": account.getId(),
    //   "website": account.getWebsite(),
    //   "date": account.getDate(),
    //   "user": account.getUsername(),
    //   "password": account.getPassword(),
    //   "info": account.getInfo(),
    //   "likes": account.getLikes(),
    //   "dislikes": account.getDislikes()
    // }

    // TODO: Error handling
    this.http.post(this.url, body, httpOptions).subscribe((data: any) => {
      console.log(data);
    });
  }

  // -----------------------------------------
  //           Calculate Rating
  // -----------------------------------------
  calcRating(Accounts: Array<Account>){
    for (let i in Accounts){
      if(Accounts[i].getLikes() == 0 && Accounts[i].getDislikes() == 0){
        Accounts[i].setRating(0);
      }
      else{
        var rate = ( 100 / (Accounts[i].getLikes() + Accounts[i].getDislikes())) * Accounts[i].getLikes();
        Accounts[i].setRating(Math.round(rate)); 
      }
    }

    return Accounts;
  }

  // -----------------------------------------
  //           Sort Accounts
  // -----------------------------------------
  sortAccounts(Accounts){
    var newID = 0;
    for(let i = 0; i < Accounts.length; i++){
      var BigAr = Accounts[i];

      for(let a = 0 + newID; a < Accounts.length; a++){
        if(BigAr.getRating() < Accounts[a].getRating()){
          BigAr = Accounts[a];
        }
      }
      // Get the old ArrayID
      var oldID = 0
      for(let b = 0; b < Accounts.length; b++){
        if(Accounts[b] == BigAr){
          oldID = b;
        }
      }
      // Remove from old Index and add to new index
      Accounts.splice(oldID, 1);
      Accounts.splice(newID, 0, BigAr);
      newID++;
    }

    return Accounts;
  }
}