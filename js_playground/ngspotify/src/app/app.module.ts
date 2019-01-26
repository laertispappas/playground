import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { appRoutes } from './app.routes'

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ 
    AppComponent, 
    NavbarComponent,
    SearchComponent, 
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
