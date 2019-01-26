import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpModule } from '@angular/http';
import { youTubeServiceInjectables } from "./search-result";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
