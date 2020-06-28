import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Item } from '../model/item';
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

  public addItem(item: Item): Promise<DocumentReference> {
    // return this.db.collection('item').add(item);
    return this.db.collection<Item>('users/' + this.userId + '/items').add(item);
  }

  public getItems(): Observable<Item[]> {
    // return this.db.collection<Item>('item').snapshotChanges()
    return this.db.collection<Item>('users/' + this.userId + '/items').snapshotChanges()
    .pipe(
      map(
        snaps => snaps.map(
          snap => <Item>{
            itemId: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        )
      )
    );
  }

  public deleteItemById(id: string) : Promise<void>{
    // return this.db.collection('item').doc(id).delete();
    return this.db.collection('users/' + this.userId + '/items').doc(id).delete();
  }

  public getItemById(id: string) : Observable<Item> {
    // return this.db.collection('item').doc<Item>(id).valueChanges();
    return this.db.collection('users/' + this.userId + '/items').doc<Item>(id).valueChanges();
  }

  public updateItemById(id: string, item: Item) : Promise<void> {
    // return this.db.collection('item').doc(id).set(item);
    return this.db.collection('users/' + this.userId + '/items').doc(id).set(item);
  }
}