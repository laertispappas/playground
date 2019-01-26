import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactStore } from './contact-store'

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
