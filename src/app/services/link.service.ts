import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  // Full Link
  private _link = "http://165.227.172.44/directus/api/1.1/tables";
  
  constructor() { }

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
