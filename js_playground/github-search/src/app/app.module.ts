import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component'
import { GithubService } from './services/github.service'
import { HttpModule } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http'


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  providers:    [ GithubService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
