import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject<string>("");
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

  changeFilter(filter: string){
    this.http.get<AccountResponse>('https://api.github.com/users/OliverBenz')
      .subscribe(data => {
        // TODO: Filter data and remove unwanted data if filter was changed
        this.Accounts.push({
          id: this.Accounts.length + 1,
          website: 'data.website',
          date: 'data.date',
          username: 'data.username',
          password: 'data.password',
          info: 'data.info',
          likes: 121,
          dislikes: 435,
          rating: 0
        });
    })

    this.accountSource.next(this.Accounts);
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
