import { Component, OnInit } from '@angular/core';
// import { FilterService } from '../services/filter.service';

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
    // public filterService: FilterService
  ) { }

  ngOnInit() {
  }

  SendFilter(data){
    // this.filterService.sendFilter(data);
    this.page.filter = data;
  }

}
