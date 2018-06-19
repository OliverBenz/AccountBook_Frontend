import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  output = ""

  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit() {
    // Get all accounts
    this.accountService.currentAccounts
      .subscribe(account => {
        this.loadAccounts(account);
      })
  }

  loadAccounts(accounts){
    var output = '';

    // Backup Array
    // this.accounts = accounts;
    console.log(accounts);
    // Generate output for accounts
    for (let i = 0; i < accounts.length; i++){
        output += '<div class="w3-col s12 m4 l2">' +
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
                  '<p class="overflow">' + accounts[i].info + '<p>' +
                  '</div>' +
                  '<div id="rating" class="w3-container w3-footer">' +
                  '<h5><b>Rating: </b>' + accounts[i].rating + '%</h5>' +
                  '<div class="w3-col s6 m6 l6 w3-hover-opacity">' +
                  '<button type="button">Like ( ' + accounts[i].likes + ' )</button>' +
                  '</div>' +
                  '<div class="w3-col s6 m6 l6 w3-hover-opacity">' +
                  '<button type="button">Dislike ( ' + accounts[i].dislikes + ' )</button>' +
                  '</div></div></div></div>';
    }
    //  onclick="window.windowAddLike(1, id.value)"
    if(accounts.length == 0){
      output += "<h1 style='text-align: center;'>No accounts for your domain</h1>";
    }
    this.output = output;
    this.router.navigate(["/main"]);
  }

  // addLike(task, id){
  //   window['windowAddLike'] = () => {
  //     var changedAccount = {};
  //     // TODO: ID is undefined, find another way to get account
  //     // TODO: Function call doesn't work with dynamically added HTML
  //     for (let i=0; i < this.accounts.length; i++){
  //       if(this.accounts[i].id == id){
  //         // 0 - like ; 1 - dislike
  //         if(task == 0){
  //           this.accounts[i].likes += 1;
  //         }
  //         if(task == 1){
  //           this.accounts[i].dislikes += 1;
  //         }
  //         changedAccount = this.accounts[i];
  //       }
  //     }
  //     this.page.output = this.loadAccounts(this.accounts);
  //     // Push changes to database
  //   };
  // }
}
