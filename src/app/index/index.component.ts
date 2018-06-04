import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  page = {
    how: {
      title: 'How it works',
      content: 'Anyone can add an account. The user can rate every search result based on if it worked or not. Strongly negative information will be removed.'
    },
    remove: {
      title: 'Removing an Account',
      content: 'You done goofed. It is not possible to remove an account so be careful to what information you provide'
    },
    twitter: {
      title: 'Twitter',
      content: 'If you spot bugs/problems on the site, please report them to out twitter account.'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
