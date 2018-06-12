import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject<any>("");
  currentAccounts = this.accountSource.asObservable();

  url = "http://localhost:8081/api/accounts";
  // url = "https://api.github.com/users/OliverBenz";

  constructor(
    private http: HttpClient
  ) {  }


  // -----------------------------------------
  //           Get Accounts
  // -----------------------------------------
  getAccounts(filter: string){
    // --------- Test Data ---------
    var Accounts = [ ]

    // --------- Get Data form API ---------
    this.http.get<any>(this.url)
      .subscribe(data => {
        // Accounts = data;
          for (let i = 0; i < data.length; i++){
            if(data[i].website.includes(filter)){
              Accounts.push({
                id: data[i].ID,
                website: data[i].website,
                date: data[i].date,
                username: data[i].user,
                password: data[i].password,
                info: data[i].info,
                likes: data[i].likes,
                dislikes: data[i].dislikes,
                rating: 0
              });
            }
          }

          // --------- Calculate Rating ---------
          Accounts = this.calcRating(Accounts);

          // --------- Sort Accounts ---------
          Accounts = this.sortAccounts(Accounts);

          // --------- Push Accounts ---------
          this.accountSource.next(Accounts);
    });
  }

  // -----------------------------------------
  //           Send Accounts
  // -----------------------------------------
  sendAccounts(account){
    console.log(new Date());
    console.log(account);
    let body = JSON.parse('{"ID": "", "website": ' + account.website + ', "date": "2018-06-06", "user": ' + account.username + ', "password": ' + account.password + ', "info": ' + account.info + ', "likes": 0, "dislikes": 0}');


    // {
    //   "ID": "",
    //   "website": account.website,
    //   "date": "2018-06-06",
    //   "user": account.username,
    //   "password": account.password,
    //   "info": account.info,
    //   "likes": 0,
    //   "dislikes": 0
    // }
    // TODO: Error handling
    this.http.post(this.url, body, httpOptions).subscribe((data: any) => {
      console.log(data);
    });
  }

  // -----------------------------------------
  //           Calculate Rating
  // -----------------------------------------
  calcRating(Accounts){
    for (let i in Accounts){
      if(Accounts[i].likes == 0 && Accounts[i].dislikes == 0){
        Accounts[i].rating = 0;
      }
      else{
        var rate = ( 100 / (Accounts[i].likes + Accounts[i].dislikes)) * Accounts[i].likes;
        Accounts[i].rating = Math.round(rate);
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
        if(BigAr.rating < Accounts[a].rating){
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


// -----------------------------------------
//           Account Interface
// -----------------------------------------
interface AccountResponse {
  id: number;
  website: string;
  date: string;
  username: string;
  password: string;
  info: string;
  likes: number;
  dislikes: number;
  rating: number;
}
