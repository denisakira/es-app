import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  nome: string;
  email: string;
}

export interface Cartao {
  descricao: string;
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

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    this.userDoc = afs.doc<User>('users/wz6Lpu8XQqvfRaFHTZMt');

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

  addCartao(cartao: Cartao) {
    this.cartoesCollection = this.userDoc.collection<Cartao>('cartoes');
    return this.cartoesCollection.add(cartao);
  }
}
