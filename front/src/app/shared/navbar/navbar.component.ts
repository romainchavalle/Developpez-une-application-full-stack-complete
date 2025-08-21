import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ]
})
export class NavbarComponent implements OnInit {
  currentUrl = '';
  isMobile = false;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => this.currentUrl = (e as NavigationEnd).url);

    // Observer pour détecter handset / petit écran
    this.breakpointObserver.observe([Breakpoints.Handset, '(max-width: 768px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
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
