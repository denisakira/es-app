import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(public angularFireAuth: AngularFireAuth, private storage: Storage, private route: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(email, password) {

  // if(this.checked){
    // this.storage.set(this.key,this.email);
  // }


    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.authService.login();
    });
  }

  async navTabs() {
    // you can use either of below
    this.route.navigateByUrl('/app/tabs/(home:home)');
    // this.navCtrl.navigateRoot('/app/tabs/(home:home)')
  }

}
