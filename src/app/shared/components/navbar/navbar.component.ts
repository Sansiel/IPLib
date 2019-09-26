import {Component, Input, OnInit} from '@angular/core';

export interface NavItem {
  title: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  @Input() title;
  @Input() items: NavItem[];


  constructor() { }
}
