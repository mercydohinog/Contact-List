import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

 var firebaseConfig = {
    apiKey: "AIzaSyBBICAkO0QfypC9RgsfG3FEX9eLNC4NFFU",
    authDomain: "firestore-26008.firebaseapp.com",
    databaseURL: "https://firestore-26008.firebaseio.com",
    projectId: "firestore-26008",
    storageBucket: "firestore-26008.appspot.com",
    messagingSenderId: "372056987256"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
