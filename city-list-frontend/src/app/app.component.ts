import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.less'],
})
export class AppComponent {
title = 'City Guide';

constructor(public authService: AuthService, public router: Router) {}

onLogout(): void {
this.authService.logout();
this.router.navigate(['/login']);
}
}
