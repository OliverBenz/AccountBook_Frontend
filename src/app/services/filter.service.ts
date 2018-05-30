import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSource = new BehaviorSubject<string>("");
  currentFilter = this.filterSource.asObservable();

  constructor() { }

  changeFilter(filter: string){
    this.filterSource.next(filter);
  }
}
