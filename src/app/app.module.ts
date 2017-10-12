import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';

const config = {
    apiKey: "<yourapikey>",
    authDomain: "<yourauthdomain>",
    databaseURL: "<yourdatabaseURL>",
    projectId: "<yourprojectid>",
    storageBucket: "<yourstorageBucket>",
    messagingSenderId: "<yourmessagingSenderId>"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
