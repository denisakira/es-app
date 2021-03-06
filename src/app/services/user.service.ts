import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

export interface User {
  Nome: string;
  Email: string;
  NomeTerapeuta: string;
  EmailTerapeuta: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.usersCollection = afs.collection<User>('pacientes');
    this.userDoc = this.usersCollection.doc<User>(afAuth.auth.currentUser.uid);
  }

  getUsers() {
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }

  getUser() {
    this.user = this.userDoc.valueChanges();
    return this.user;
  }

  updateUser(user: User) {
    const res = this.usersCollection
      .doc(this.afAuth.auth.currentUser.uid)
      .update(user);
    console.log(res);
  }
}
