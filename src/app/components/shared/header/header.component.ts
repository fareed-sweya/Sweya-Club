import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSearch: boolean;
  showLanguages: boolean;
  showMessages: boolean;
  showNotifications: boolean;
  showTasks: boolean;

  constructor() { }

  ngOnInit() {
  }

}
