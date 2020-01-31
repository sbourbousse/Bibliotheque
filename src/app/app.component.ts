import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bibliotheque';
  constructor() {
    // Your web app's Firebase configuration
    const config = {
      apiKey: 'AIzaSyDWGFg0OnjTyjCW0wUK5Bt_oFjJN1PmSek',
      authDomain: 'bibliotheque-23676.firebaseapp.com',
      databaseURL: 'https://bibliotheque-23676.firebaseio.com',
      projectId: 'bibliotheque-23676',
      storageBucket: 'bibliotheque-23676.appspot.com',
      messagingSenderId: '605264681812',
      appId: '1:605264681812:web:ffccb1f32bf93b3bfc06c1'
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}
