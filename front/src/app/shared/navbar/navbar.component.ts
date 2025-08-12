import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterModule, MatIconModule]
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
