import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../../../authorization/service/auth.service';
import { Router } from '@angular/router';

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

  
  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }

  signOut() {
    this.authService.signOut();
    this.router.navigateByUrl('/');
  }
}
