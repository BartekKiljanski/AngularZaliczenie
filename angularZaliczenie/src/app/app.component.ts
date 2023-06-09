import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
   
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
