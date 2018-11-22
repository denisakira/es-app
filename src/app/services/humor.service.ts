import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.service';
import { map } from 'rxjs/operators';

export class Humor {
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  private usersCollection: AngularFirestoreCollection<User>;
  private humorCollection: AngularFirestoreCollection<Humor>;
  private userDoc: AngularFirestoreDocument<User>;

  humores: Observable<Humor[]>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.usersCollection = afs.collection<User>('pacientes');
    this.userDoc = this.usersCollection.doc<User>(afAuth.auth.currentUser.uid);
    this.humorCollection = this.userDoc.collection<Humor>('humores');
  }

  carregaHumores() {
    this.humores = this.humorCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Humor;
          return data;
        })
      )
    );
    return this.humores;
  }

  submitNovoHumor(humor: Humor) {
    return this.humorCollection.add(humor);
  }
}
