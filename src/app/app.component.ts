import { Component } from '@angular/core';
import {NavItem} from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public navItems: NavItem[] = [
    {title: 'Главная', path: './', exact: true},
    {title: 'Книги', path: '/books/list'},
    {title: 'Админка', path: '/admin'},
  ];
  public title = 'IPLib';
}
