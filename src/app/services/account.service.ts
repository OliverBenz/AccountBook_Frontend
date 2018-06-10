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
    let Accounts = [
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
          likes: 1000,
          dislikes: 2,
          rating: 0
        },
        {
          id: 3,
          website: 'bugmenotsdf.com',
          date: '8.5.2019',
          username: 'MinesdfcraftBoy',
          password: 'minecrasdfftForEternity123',
          info: "mmmmmmmmmmmm",
          likes: 145,
          dislikes: 2,
          rating: 0
        },
        {
          id: 4,
          website: 'minecraft.com',
          date: '8.5.2014',
          username: 'MinesdfcraftBoy',
          password: 'minecrasdfftForEternity123',
          info: "test",
          likes: 12,
          dislikes: 222,
          rating: 0
        }
      ]

    // --------- Get Data form API ---------
    this.http.get<any>(this.url)
      .subscribe(data => {
          for (let i=0; i < data.length; i++){
            // fix filter
            if(data[i].website.includes(filter) || filter == ""){
              Accounts.push({
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
              console.log(Accounts);
            }
          }
    })

    // --------- Calculate Rating ---------
    for (let i in Accounts){
      if(Accounts[i].likes == 0 && Accounts[i].dislikes == 0){
        Accounts[i].rating = 0;
      }
      else{
        var rate = ( 100 / (Accounts[i].likes + Accounts[i].dislikes)) * Accounts[i].likes;
        Accounts[i].rating = Math.round(rate);
      }
    }


    // --------- Sort Accounts ---------
    var sortedArray = [];
    for(let i = 0; i < Accounts.length; i++){
      var bigAr = Accounts[i];

      // Find biggest value rating
      for(let a = 0; a < Accounts.length; a++){
        if(bigAr.rating < Accounts[a].rating){
          bigAr = Accounts[a];
        }
      }

      sortedArray.push(bigAr);

      // Remove the biggest Account --> Already saved in new Array
      for(let x=0; x<Accounts.length; x++){
        if(Accounts[x] == bigAr){
          Accounts.splice(x, 1);
        }
      }
      // Reset i: Repeat for-loop with new Accounts.length
      i = 0;
    }
    // Push last Account into new Array
    sortedArray.push(Accounts[0]);


    this.accountSource.next(sortedArray);
  }

  // -----------------------------------------
  //           Send Accounts
  // -----------------------------------------
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
