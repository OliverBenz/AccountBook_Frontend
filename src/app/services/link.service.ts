import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  // Full Link
  private _link = "http://165.227.172.44/directus/api/1.1/tables";
  
  constructor() { }

  public getHeader(){
    return httpOptions.headers;
  }

  public getAccountLink(){
    return this._link + "/acc_accounts/rows";
  }
  public getUserLink(){
    return this._link + "/acc_user/rows";
  }
  public getContent(){
    return this._link + "/acc_content/rows";
  }
}
