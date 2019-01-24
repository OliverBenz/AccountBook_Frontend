import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  // Full Link
  private _link = "http://127.0.0.1/directus/api/1.1/tables";
  
  constructor() { }

  public getAccountLink(){
    return this._link + "/account/rows";
  }
  public getUserLink(){
    return this._link + "/user/rows";
  }
}
