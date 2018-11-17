import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  // Base properties
  private _prefix = "http://";

  private _ip = "18.185.84.90";
  private _port = "8080";

  private _api = "/api";

  // Full Link
  private _link = this._prefix + this._ip + ":" + this._port + this._api;
  
  // API Selectors
  private _apiAccounts = this._link + "/accounts";
  private _apiCustomers = this._link + "/customers";
  

  constructor() { }

  getAccountLink(){
    return this._apiAccounts;
  }
  getCustomersLink(){
    return this._apiCustomers;
  }
}
