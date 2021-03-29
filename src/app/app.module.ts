import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


export const firebaseConfig = {
  apiKey: "AIzaSyCIPi6zcLW9yJmnXEXKhyGCVbwL0eCAugw",
  authDomain: "angular-demo-project-f282a.firebaseapp.com",
  databaseURL: "https://angular-demo-project-f282a-default-rtdb.firebaseio.com",
  projectId: "angular-demo-project-f282a",
  storageBucket: "angular-demo-project-f282a.appspot.com",
  messagingSenderId: "94153433247",
  appId: "1:94153433247:web:9de54eb9d0623493d242aa",
  measurementId: "G-GYNJ38D1QX"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AuthModule,
    HomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
