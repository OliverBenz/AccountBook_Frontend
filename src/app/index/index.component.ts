import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  page = {
    welcome:  {
      title: 'Welcome to AccountBook',
      content: 'AccountBook is a account sharing website. Just search for the game or website you need an account for and if someone already provided their informatin you can just use it on free will'
    },
    how: {
      title: 'How it works',
      content: 'Anyone can add an account. The user can rate every search result based on if it worked or not. Strongly negative information will be removed.'
    },
    remove: {
      title: 'Removing an Account',
      content: 'It is not possible to remove an account so be careful to what information you provide'
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
