import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-site',
  templateUrl: './start-site.component.html',
  styleUrls: ['./start-site.component.css']
})
export class StartSiteComponent implements OnInit {
  page = {
    searchInput: "hidden"
  }


  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit() {
  }


  gotoStartsite(){
    this.router.navigate(["/index"]);
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
    // Send Filter and show results
    this.accountService.changeFilter(filter);
    this.router.navigate(["/main"]);
  }

}