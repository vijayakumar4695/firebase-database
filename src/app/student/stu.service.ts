import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Study } from './study.model';
@Injectable({
  providedIn: 'root'
})
export class StuService {
  studentdata:Study;

  constructor(private firestore:AngularFirestore) { }
  getStudent(){
    return this.firestore.collection('student').snapshotChanges();
  }
}
