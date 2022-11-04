import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private firestore: Firestore) {}

  addBook(book: Book) {
    const bookRef = collection(this.firestore, 'book');
    return addDoc(bookRef, book);
  }

  getBooks(): Observable<Book[]> {
    const bookRef = collection(this.firestore, 'book');
    return collectionData(bookRef, { idField: 'id' }) as Observable<Book[]>;
  }
}
