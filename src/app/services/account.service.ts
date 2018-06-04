import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//
// const httpOptions = {
//   headers: new HttpHeaders({
//     "token": "sg4q4yHabwkb1ZEsgVw2Gw"
//   })
// };


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject<any>("");
  currentAccounts = this.accountSource.asObservable();

  Accounts = [
    {
        id: 1,
        website: 'twitter.com',
        date: '8.5.2018',
        username: 'KoolKidKlaus',
        password: 'minecraftForLife1',
        info: "Pls don't hack me, I like this account",
        likes: 100,
        dislikes: 10,
        rating: 0
      },
      {
        id: 2,
        website: 'bugmenot.com',
        date: '8.5.2018',
        username: 'MinecraftBoy',
        password: 'minecraftForEternity123',
        info: "mmmmmmmmmmmm mmmmmmmm",
        likes: 100,
        dislikes: 2,
        rating: 0
      }
    ]

  constructor(
    private http: HttpClient
  ) {  }

  getAccounts(filter: string){
    console.log(this.Accounts);
    console.log(filter);

    // Clear Array
    this.Accounts.length = 0;

    // Access API
    // TODO: not type <any> but <AccountsResponse>
    this.http.get<any>('http://localhost:8081/api/account/accountdetails')
      .subscribe(data => {
          // console.log(data);
          for (let i=0; i < data.length; i++){
            // TODO: check if data.website CONTAINS the filter %filter% or something
            if(data.website == filter || data.website == "www." + filter){
            this.Accounts.push({
              id: data[i].id,
              website: data[i].website,
              date: data.date,
              username: data[i].user,
              password: data[i].password,
              info: data[i].info,
              likes: data[i].likes,
              dislikes: data[i].dislikes,
              rating: 0
            });
            }
          }
    })

    this.accountSource.next(this.Accounts);
  }

  sendAccounts(account){
    console.log(new Date());
    var accountPost = {
      token: "sg4q4yHabwkb1ZEsgVw2Gw",
      data: {
        id: "",
        website: account.website,
        date: new Date(),
        username: account.username,
        password: account.password,
        info: account.info,
        likes: 0,
        dislikes: 0
      }
    };
    // TODO: Error handling
    this.http.post<AccountResponse>("http://app.fakejson.com/q", accountPost);
    console.log(account);
    console.log(accountPost);
  }
}
// Account Interface so we can acces the data in the API connection above
interface AccountResponse {
  id: number;
  website: string;
  date: string;
  username: string;
  password: string;
  info: string;
  likes: number;
  dislikes: number;
}
