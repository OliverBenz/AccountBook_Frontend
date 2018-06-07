import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject<any>("");
  currentAccounts = this.accountSource.asObservable();

  // url = "http://localhost:8081/api/accounts";
  url = "https://api.github.com/users/OliverBenz";

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
    // Clear Array
    this.Accounts.length = 0;

    // Access API
    // TODO: not type <any> but <AccountsResponse>
    this.http.get<any>(this.url)
      .subscribe(data => {
          for (let i=0; i < data.length; i++){
            // fix filter
            if(data[i].website.includes(filter) || filter == ""){
              this.Accounts.push({
                id: data[i].ID,
                website: data[i].website,
                date: data.date,
                username: data[i].login,
                password: data[i].password,
                info: data[i].info,
                likes: data[i].likes,
                dislikes: data[i].dislikes,
                rating: 0
              });
              console.log(this.Accounts);
            }
          }
    })

    // Calculate percentage rating for every object
    for (let i in this.Accounts){
      if(this.Accounts[i].likes == 0 && this.Accounts[i].dislikes == 0){
        this.Accounts[i].rating = 0;
      }
      else{
        var rate = ( 100 / (this.Accounts[i].likes + this.Accounts[i].dislikes)) * this.Accounts[i].likes;
        this.Accounts[i].rating = Math.round(rate);
      }
    }

    // Sort Array by rating desc
    // TODO: sort array by best rating
    // for(let i = 0; i < this.Accounts.length; i++){
    //
    // }
    this.accountSource.next(this.Accounts);
  }

  sendAccounts(account){
    console.log(new Date());
    var body = {
      "ID": "",
      "website": account.website,
      "date": "2018-06-06",
      "user": account.username,
      "password": account.password,
      "info": account.info,
      "likes": 0,
      "dislikes": 0
    };
    // TODO: Error handling
    this.http.post(this.url, body, httpOptions);
      // .subscribe((data: any) => {
      // });
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
  rating: number;
}
