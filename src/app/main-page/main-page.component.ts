import { Component, OnInit } from '@angular/core';
import {AngularIndexedDB} from "../service/indexed-db.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const db = new AngularIndexedDB('myDb', 1);
    db.openDatabase(1, (evt) => {
        const objectStore = evt.currentTarget.result.createObjectStore(
          'users', { keyPath: 'id', autoIncrement: true });
        objectStore.createIndex('username', 'username', { unique: false });
        objectStore.createIndex('password', 'password', { unique: false });
        objectStore.createIndex('email', 'email', { unique: false });
        objectStore.createIndex('fullName', 'fullName', { unique: false });
        objectStore.createIndex('age', 'age', { unique: false });
        objectStore.createIndex('address', 'address', { unique: false });
        objectStore.createIndex('phone', 'phone', { unique: false });
        objectStore.createIndex('history', 'history', { unique: false });
        objectStore.createIndex('allergy', 'allergy', { unique: false });
       }
    );
  }
}
