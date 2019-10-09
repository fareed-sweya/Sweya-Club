import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sideMenu: boolean;
  constructor() { }

  setSideMenu(flag) {
    this.sideMenu = flag;
  }
  getSideMenu(){
    this.sideMenu;
  }
}
