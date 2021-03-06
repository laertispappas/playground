// import { provideRouter, RouterConfig } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

export const appRoutes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'about', component: AboutComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'album/:id', component: AlbumComponent}
    //   { path: '**', component: PageNotFoundComponent }
];
