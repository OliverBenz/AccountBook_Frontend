import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = {
    title: 'AccountBook',
    welcome: 'Welcome to AccountBook',
    slogan: 'We barely provide any data and are the worlds smallest account sharing website!',
    filter: '',
    searchInput: "hidden"
  }

  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  changeSeachInput(){
    if(this.page.searchInput == "hidden"){
      this.page.searchInput = "visible";
    }
    else if(this.page.searchInput == "visible"){
      this.page.searchInput = "hidden";

    }
  }
  SendFilter(filter){
    this.page.searchInput = "hidden";

    this.accountService.getAccounts(filter);
    
    this.gotoAccountssite();
  }
  gotoStartsite(){
    this.router.navigate(["/index"]);
  }
  gotoAddsite(){
    this.router.navigate(["/add"]);
  }
  gotoAccountssite(){
    this.router.navigate(["/main"]);
  }
}
