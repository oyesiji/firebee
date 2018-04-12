import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
  
  ngOnInit(): void {
    const config = {
    apiKey: "AIzaSyAED-MUvx8Vu1AaYAwpnkCSE8PxUm9PlkY",
    authDomain: "instagram-de354.firebaseapp.com",
    databaseURL: "https://instagram-de354.firebaseio.com",
    projectId: "instagram-de354",
    storageBucket: "instagram-de354.appspot.com",
    messagingSenderId: "885554664577"
  };
     firebase.initializeApp(config);
  }

}
