import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = '';
  password = '';
  loggedin: boolean = false;
  constructor(
    private afireauth: AngularFireAuth,
    private afiredb: AngularFireDatabase
  ) {
  }

  login() {
    this.afireauth.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
      this.afiredb.database.ref('/sendmail').push({
        emailid: this.email
      }).then(() => {
        this.loggedin = true;
      })
    })
  }
}
