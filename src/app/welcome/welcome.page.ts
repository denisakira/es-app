import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

//pacotes instalados:
//npm install --save @ionic/storage
//npm i @ionic/angular
//npm i @angular/fire

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {
  key: string = 'username';
  checked: boolean;
  public isLogged: boolean;
  userID: any;
  public userNome: string = '';
  idToken: any;
  ids: any;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private storage: Storage,
    private route: Router,
    private authService: AuthenticationService,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {}

  ionViewDidLoad() {}

  ionViewWillEnter() {
    this.authService.authenticationState.subscribe(state => {
      if (state) {
        this.isLogged = true;
        this.angularFireAuth.authState.subscribe(auth => {
          //console.log(auth.uid);
          var db = this.firestore;
          db.collection('pacientes')
            .doc(auth.uid)
            .get()
            .toPromise()
            .then(doc => {
              this.userNome = doc.data().Nome;
              //console.log(this.userNome);
            });
        });
        //console.log(this.angularFireAuth.auth.currentUser.uid);
      } else {
        this.isLogged = false;
      }
    });
  }

  login(email, password) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authService.login();
      });
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('');
  }

  async navTabs() {
    this.route.navigateByUrl('/app/tabs/(home:home)');
  }
}
