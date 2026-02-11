import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // 👈 AJOUTER
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Notfound } from './notfound/notfound';

@NgModule({
  declarations: [
    App,
    Notfound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // 👈 IMPORTANT
  ],
  bootstrap: [App]
})
export class AppModule { }
