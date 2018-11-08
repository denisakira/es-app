import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface User {
  nome: string;
  email: string;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>("users");
    this.userDoc = afs.doc<User>("users/wz6Lpu8XQqvfRaFHTZMt");
    this.users = this.usersCollection.valueChanges();
    this.user = this.userDoc.valueChanges();
  }

  getUsers() {
    return this.users;
  }

  getUser() {
    return this.user;
  }
}
