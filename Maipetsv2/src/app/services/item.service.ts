import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Mascota } from 'src/app/model/mascota';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  userId : string;

  constructor(private db: AngularFirestore,
              private authService: AuthService) 
    {
      this.authService.getCurrentUser().subscribe(
        data => this.userId = data.uid
      );
     }
     // ('users/' + this.userId + '/items') para hacer una lista para cada usuario

  public addItem(mascota: Mascota): Promise<DocumentReference> {
    // return this.db.collection('item').add(item);
    return this.db.collection<Mascota>('users/' + this.userId + '/mascotas').add(mascota);
  }

  public getItems(): Observable<Mascota[]> {
    // return this.db.collection<Item>('item').snapshotChanges()
    return this.db.collection<Mascota>('users/' + this.userId + '/mascotas').snapshotChanges()
    .pipe(
      map(
        snaps => snaps.map(
          snap => <Mascota>{
            itemId: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        )
      )
    );
  }

  public deleteItemById(id: string) : Promise<void>{
    // return this.db.collection('item').doc(id).delete();
    return this.db.collection('users/' + this.userId + '/mascotas').doc(id).delete();
  }

  public getItemById(id: string) : Observable<Mascota> {
    // return this.db.collection('item').doc<Item>(id).valueChanges();
    return this.db.collection('users/' + this.userId + '/mascotas').doc<Mascota>(id).valueChanges();
  }

  public updateItemById(id: string, mascota: Mascota) : Promise<void> {
    // return this.db.collection('item').doc(id).set(item);
    return this.db.collection('users/' + this.userId + '/mascotas').doc(id).set(mascota);
  }
}