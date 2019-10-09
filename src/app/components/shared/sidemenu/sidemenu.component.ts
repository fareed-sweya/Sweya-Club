import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Output() sidemenuFlag: EventEmitter<any> = new EventEmitter<any>();
  showSideMenu: boolean;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  manageSideMenu() {
    this.showSideMenu = !this.showSideMenu;
    this.sidemenuFlag.emit(this.showSideMenu);
  }

}
