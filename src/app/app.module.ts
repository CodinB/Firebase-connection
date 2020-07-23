import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
var connectionString = {
  apiKey: "AIzaSyBmp1d_-QechGk8JY2vHoMdRZewKVM006Q",
  authDomain: "fsdi-6aa30.firebaseapp.com",
  databaseURL: "https://fsdi-6aa30.firebaseio.com",
  projectId: "fsdi-6aa30",
  storageBucket: "fsdi-6aa30.appspot.com",
  messagingSenderId: "92558793025"

  //this connection string is required to connect to the database, but you can connect to your own database by replacing this string when you create your own firecode database
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(connectionString),
    AngularFirestoreModule,
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
