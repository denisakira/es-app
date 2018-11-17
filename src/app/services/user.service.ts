import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

export interface User {
  nome: string;
  email: string;
}

export interface Cartao {
  descricao: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cartoesCollection: AngularFirestoreCollection<Cartao>;
  private cartaoDoc: AngularFirestoreDocument<Cartao>;
  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  users: Observable<User[]>;
  user: Observable<User>;
  cartoes: Observable<Cartao[]>;
  cartao: Observable<Cartao>;

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

  getCartoes() {
    this.cartoes = this.userDoc.collection<Cartao>('cartoes').valueChanges();
    return this.cartoes;
  }

  getCartao() {
    this.cartao = this.userDoc
      .collection<Cartao>('cartoes')
      .doc<Cartao>('SaIQ4wMRo9osMlIMWzEn')
      .valueChanges();
    return this.cartao;
  }

  addCartao(cartao: Cartao) {
    this.cartoesCollection = this.userDoc.collection<Cartao>('cartoes');
    return this.cartoesCollection.add(cartao);
  }
}
