import { LinkService } from './link.service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Content } from '../classes/content';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer FZNeFDquC8po5GLdghCEe76LPf4zAh44'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private _url = ""

  private indexSource = new BehaviorSubject<any>("");
  indexContent = this.indexSource.asObservable();

  private headerSource = new BehaviorSubject<any>("");
  headerContent = this.headerSource.asObservable();

  constructor(
    private linksService: LinkService,
    private http: HttpClient
  ) {
    this._url = this.linksService.getContent();
  }

  public getIndex(){
    this.http.get(this._url + "?filters[site][eq]=index", httpOptions).subscribe((data: any) => {      
      this.indexSource.next(this.format(data.data));
    }, (error: any) => {
      console.log(error);
    });
  }

  public getHeader(){
    this.http.get(this._url + "?filters[site][eq]=header", httpOptions).subscribe((data: any) =>{
      this.headerSource.next(this.format(data.data));
    }, (error: any) => {
      console.log(error);
    });
  }

  public format(content){
    var contentList: Array<Content> = [];

    for(let i = 0; i < content.length; i++){
      let c = new Content(content[i].title, content[i].content, content[i].order);
      contentList.push(c);
    }

    contentList = this.sort(contentList);

    return contentList;
  }

  public sort(data){
    var newID = 0;
    for(let i = 0; i < data.length; i++){
      var bData = data[i];

      for(let a = 0 + newID; a < data.length; a++){
        if(bData.order > data[a].order){
          bData = data[a];
        }
      }
      // Get the old ArrayID
      var oldID = 0
      for(let b = 0; b < data.length; b++){
        if(data[b] == bData){
          oldID = b;
        }
      }
      // Remove from old Index and add to new index
      data.splice(oldID, 1);
      data.splice(newID, 0, bData);
      newID++;
    }

    return data;
  }
}
