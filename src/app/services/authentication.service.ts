import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { firebase } from '@firebase/app';
import { Route, Router, RouterEvent } from '@angular/router';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public routee: Router
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.afAuth.auth.signOut();
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  signUp(email, password, nome, nome_terapeuta) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // it create a new user starting point of create user
        this.afAuth.auth.currentUser
          .sendEmailVerification()
          .then(() => {
            // it send verification mail to the respective user
            const db = this.firestore;
            db.collection('pacientes')
              .doc(this.afAuth.auth.currentUser.uid)
              .set({
                Nome: nome,
                Email: email,
                Password: password,
                NomeTerapeuta: nome_terapeuta
              })
              .then(() => {
                this.routee.navigateByUrl('');
              })
              .catch(error => {
                alert(error.message);

                // for when document is not correctly wrote
              }); // end of the firestore data
          })
          .catch(error => {
            // for when verification email is not sent to respective mails
            alert(error.message);
          }); // end of verification mail
      })
      .catch((
        error // error occur when new user is already registered
      ) => {
        alert(error.message);
        alert(error.code);
      }); // end of create user method
  }
}
