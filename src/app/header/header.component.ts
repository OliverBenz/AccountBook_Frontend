import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';

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
    private filterService: FilterService
  ) { }

  ngOnInit() {
  }

  SendFilter(filter){
    this.filterService.changeFilter(filter);
  }
}
