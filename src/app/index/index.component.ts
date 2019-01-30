import { ContentService } from './../services/content.service';
import { Component, OnInit } from '@angular/core';

import { Content } from '../classes/content';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public contentList: Array<Content> = [];

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    let c = new Content("...", "...", -1);
    this.contentList.push(c);

    this.contentService.getIndex();
    this.contentService.indexContent.subscribe(content => {
      if(content){
        this.contentList = content;
      }
    });
  }

}
