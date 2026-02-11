import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Film } from '../shared/models/film';
import { CollectionReference, DocumentData, doc as docRef, CollectionReference as CollectionRef } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Bd {

  private filmsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.filmsCollection = collection(this.firestore, 'films'); // collection "films"
  }

  // Récupérer tous les films
  getFilms(): Observable<Film[]> {
    return collectionData(this.filmsCollection, { idField: 'id' }) as Observable<Film[]>;
  }

  // Récupérer un seul film par id
  getFilm(id: string): Observable<Film> {
    const filmDoc = doc(this.firestore, `films/${id}`);
    return docData(filmDoc, { idField: 'id' }) as Observable<Film>;
  }

  // Ajouter un film
  addFilm(film: Film) {
    return addDoc(this.filmsCollection, film);
  }

  // Mettre à jour un film
  updateFilm(id: string, value: Partial<Film>) {
    const filmDoc = doc(this.firestore, `films/${id}`);
    return updateDoc(filmDoc, value);
  }

  // Supprimer un film
  deleteFilm(id: string) {
    const filmDoc = doc(this.firestore, `films/${id}`);
    return deleteDoc(filmDoc);
  }
}
