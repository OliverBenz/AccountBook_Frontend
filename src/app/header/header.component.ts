import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = {
    title: 'AccountBook',
    filter: ''
  }

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  SendFilter(filter){
    this.accountService.changeFilter(filter);
  }
}
