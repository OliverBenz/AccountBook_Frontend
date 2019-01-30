import { ContentService } from './../services/content.service';
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
    welcome: '..',
    slogan: '..',
    searchInput: "hidden"
  }

  constructor(
    private accountService: AccountService,
    public router: Router,
    public contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getHeader();
    this.contentService.headerContent.subscribe(content => {
      if(content){
        this.page.welcome = content[0].getTitle();
        this.page.slogan = content[0].getContent();
      }
    });
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

    this.accountService.setFilter(filter);
    this.accountService.getAccounts();
    
    this.gotoAccountsSite();
  }
  gotoStartSite(){
    this.router.navigate(["/index"]);
  }
  gotoAddSite(){
    this.router.navigate(["/add"]);
  }
  gotoAccountsSite(){
    this.router.navigate(["/main"]);
  }
  gotoLoginSite(){
    this.router.navigate(["/login"]);
  }
}
