import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  accounts = [ ]
  page = {
    rating: 'Rating: ' + '90%',
    output: ''
  }

  constructor( private accountService: AccountService ) { }

  ngOnInit() {
    // Get all accounts
    this.accountService.currentAccounts.subscribe(account => {
      this.page.output = this.loadAccounts(account);
    })

    //TODO: If on another page: Switch to main when pressed "enter" on searchSite
  }

  loadAccounts(accounts){
    var output = '';

    // Calculate percentage rating for every object
    for (let i in accounts){
      if(accounts[i].likes == 0 && accounts[i].dislikes == 0){
        accounts[i].rating = 0;
      }
      else{
        var rate = ( 100 / (accounts[i].likes + accounts[i].dislikes)) * accounts[i].likes;
        accounts[i].rating = Math.round(rate);
      }
    }

    // Generate output for accounts
    for (let i=0;i < accounts.length; i++){
        output += '<div class="w3-col s6 m4 l2">' +
                  '<div class="w3-margin w3-card w3-hover-shadow containerhight">' +
                  '<div class="w3-container w3-header darker-grey">' +
                  '<h2 class="title">' + accounts[i].website + '</h2>' +
                  '<p id="date">' + accounts[i].date + '</p>' +
                  '</div>' +
                  '<div class="userInfo w3-container">' +
                  '<p><b>Username</b></p>' +
                  '<p class="overflow">' + accounts[i].username + '</p><br>' +
                  '<p><b>Password</b></p>' +
                  '<p class="overflow">' + accounts[i].password + '</p><br>' +
                  '<p><b>Other</b></p>' +
                  '<p class="overflow">' + accounts[i].info + '</p>' +
                  '</div>' +
                  '<div id="rating" class="w3-container w3-footer">' +
                  '<h5><b>Rating: </b>' + accounts[i].rating + ' %</h5>' +
                  '</div></div></div>';
    }
    return output;
  }
}
