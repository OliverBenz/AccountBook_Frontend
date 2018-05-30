import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page = {
    rating: 'Rating: ' + '90%',
    output: '',
    filter:''
  }
  // // Account Interface so we can acces the data in the API connection above
  // interface AccountResponse {
  //   id: integer;
  //   site: string;
  //   date: date;
  //   username: string;
  //   password: string;
  //   other: string;
  //   likes: integer;
  //   dislikes: integer;
  //   rating: integer;
  // }
  // TODO: Get data from database and format output
  accounts = [
    {
      id: 1,
      site: 'twitter.com',
      date: '8.5.2018',
      username: 'KoolKidKlaus',
      password: 'minecraftForLife1',
      other: "Pls don't hack me, I like this account",
      likes: 100,
      dislikes: 10,
      rating: 0
    },
    {
      id: 2,
      site: 'bugmenot.com',
      date: '8.5.2018',
      username: 'MinecraftBoy',
      password: 'minecraftForEternity123',
      other: "mmmmmmmmmmmm mmmmmmmm",
      likes: 100,
      dislikes: 2,
      rating: 0
    }
  ]
  constructor(
    private http: HttpClient,
    private filterService: FilterService
  ) { }
  ngOnInit() {
    // GET DATA FROM API
    this.http.get<AccountResponse>('https://api.github.com/users/OliverBenz')
      .subscribe(data => {
        console.log(data);
        this.accounts.push({
          id: data.id,
          site: data.website,
          date: data.date,
          username: data.username,
          password: data.password,
          other: data.info,
          likes: data.likes,
          dislikes: data.dislikes,
          rating: 0
        })
      });


    // Calculate percentage rating for every object
    for (let i in this.accounts){
      var rate = ( 100 / (this.accounts[i].likes + this.accounts[i].dislikes)) * this.accounts[i].likes;
      this.accounts[i].rating = Math.round(rate);
    }

    //Generate HTML output from accounts array
    // this.page.output = this.loadAccounts(this.accounts);

    this.filterService.currentFilter.subscribe(filter => this.page.filter = filter)
    //TODO: Call function again after filter is received
    //TODO: If on another page: Switch to main when pressed "enter" on searchSite
    this.page.output = this.loadAccounts(this.accounts);
  }

  loadAccounts(accounts){
    var output = '';
    console.log(accounts)
    for (let i=0;i<accounts.length;i++){
      console.log(i);
      if(this.page.filter == ""){
        output += '<div class="w3-col s6 m4 l2">' +
                  '<div class="w3-margin w3-card w3-hover-shadow containerhight">' +
                  '<div class="w3-container w3-header darker-grey">' +
                  '<h2 class="title">' + accounts[i].site + '</h2>' +
                  '<p id="date">' + accounts[i].date + '</p>' +
                  '</div>' +
                  '<div class="userInfo w3-container">' +
                  '<p><b>Username</b></p>' +
                  '<p class="overflow">' + accounts[i].username + '</p><br>' +
                  '<p><b>Password</b></p>' +
                  '<p class="overflow">' + accounts[i].password + '</p><br>' +
                  '<p><b>Other</b></p>' +
                  '<p class="overflow">' + accounts[i].other + '</p>' +
                  '</div>' +
                  '<div id="rating" class="w3-container w3-footer">' +
                  '<h5><b>Rating: </b>' + accounts[i].rating + ' %</h5>' +
                  '</div></div></div>';
      }
    }
    return output;
  }
}
