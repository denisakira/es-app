import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';

export class Pensamento {
  situacao: string;
  pensamento: string;
  acao: string;
}

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private usersCollection: AngularFirestoreCollection<User>;
  private pensamentoCollection: AngularFirestoreCollection<Pensamento>;
  private userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.usersCollection = afs.collection<User>('pacientes');
    this.userDoc = this.usersCollection.doc<User>(afAuth.auth.currentUser.uid);
    this.pensamentoCollection = this.userDoc.collection<Pensamento>('pensamentos');
  }

  submitNovoPensamento(pensamento) {
    return this.pensamentoCollection.add(pensamento);
  }
}
