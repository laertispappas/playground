import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyB2qmN7b98f0NQCrr4SMbEFhkyMohIlIVA",
    authDomain: "businesscontacts-10db0.firebaseapp.com",
    databaseURL: "https://businesscontacts-10db0.firebaseio.com",
    storageBucket: "businesscontacts-10db0.appspot.com"
  })
]);
