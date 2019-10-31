import { Component } from '@angular/core';
import { AuthService } from '../../../authorization/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent{
  
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }
    signOut() {
      this.authService.signOut();
      this.router.navigateByUrl('/');
      document.body.classList.add('bg-img');
    }
  }
