import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   currentUrl = '';

  constructor(private router: Router, private sessionService: SessionService) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => this.currentUrl = (e as NavigationEnd).url);
  }

  ngOnInit(): void {
  }

  showNavbarDetails(): boolean {
    return !this.currentUrl.startsWith('/login') &&
           !this.currentUrl.startsWith('/register');
  }

  logout() {
    this.sessionService.logOut();
    this.router.navigate(['/login']);
  }

}
