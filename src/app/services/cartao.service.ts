import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { User } from './user.service';

export interface Cartao {
  id?: string;
  descricao: string;
  foto: string;
  concluido: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
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
    this.cartoesCollection = this.userDoc.collection<Cartao>('cartoes', ref =>
      ref.where('concluido', '==', false)
    );
  }

  getCartoes() {
    this.cartoes = this.cartoesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Cartao;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.cartoes;
  }

  getCartao(id: string) {
    this.cartao = this.userDoc
      .collection<Cartao>('cartoes')
      .doc<Cartao>(id)
      .valueChanges();
    return this.cartao;
  }

  addCartao(cartao: Cartao) {
    return this.cartoesCollection.add(cartao);
  }

  updateCartao(cartao: Cartao) {
    const res = this.cartoesCollection.doc(cartao.id).update(cartao);
    console.log(res);
  }
}
