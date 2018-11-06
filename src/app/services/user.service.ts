import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
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
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>("users");
    this.users = this.usersCollection.valueChanges();
  }

  getUsers() {
    return this.users;
  }
}
