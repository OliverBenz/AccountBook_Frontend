import { Component, OnInit } from '@angular/core';
// import { FilterService } from '../services/filter.service';

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
  // TODO: Database layout check, Table for every site or every site in same table
  // TODO: Get data from database and format output
  accounts = [
    {
      id: '1',
      site: '1. Testsite',
      date: '8.5.2018',
      username: '1. Testname ',
      password: '1. Password',
      other: '1. Other',
      likes: 10,
      dislikes: 10,
      rating: 0
    },
    {
      id: '2',
      site: '2. Testsite',
      date: '8.5.2018',
      username: '2. Testname',
      password: '2. password',
      other: '2. other',
      likes: 100,
      dislikes: 2,
      rating: 0
    }
  ]
  constructor(
    // private filterService: FilterService
  ) { }
  ngOnInit() {
    // Calculate percentage rating for every object
    for (let i in this.accounts){
      var rate = ( 100 / (this.accounts[i].likes + this.accounts[i].dislikes)) * this.accounts[i].likes;
      this.accounts[i].rating = Math.round(rate);
    }

    //Generate HTML output from accounts array
    this.page.output = this.loadAccounts(this.accounts);

    // this.filterService.filterSubject.subscribe(
    //   data => console.log(data)
    // )
  }

  loadAccounts(accounts){
    var output = '';
    for (let i in accounts){
      output += '<div class="w3-col s6 m3 l2 ">' +
                '<div class="w3-margin w3-card w3-hover-shadow">' +
                '<div class="w3-container w3-header w3-blue">' +
                '<div class="">' +
                '<h2 class="title">' + accounts[i].site + '</h2>' +
                '</div>' +
                '<div id="date" class=""' +
                '<p>' + accounts[i].date + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="userInfo w3-container">' +
                '<p><b>Username</b></p>' +
                '<p>' + accounts[i].username + '</p>' +
                '<p><b>Password</b></p>' +
                '<p>' + accounts[i].password + '</p>' +
                '<p><b>Other</b></p>' +
                '<p>' + accounts[i].other + '</p>' +
                '</div>' +
                '<div class="w3-container w3-footer">' +
                '<h4><b>Rating: </b>' + accounts[i].rating + '%</h4>' +
                '</div></div></div>';
    }
    return output;
  }
}
