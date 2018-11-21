import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss']
})
export class EntrarPage implements OnInit {
  constructor(
    public angularFireAuth: AngularFireAuth,
    private route: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  login(email, password) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        await this.authService.login();
        this.navTabs();
      });
  }

  navTabs() {
    this.route.navigateByUrl('/app/tabs/(home:home)');
  }
}
