import {provideRouter, RouterConfig} from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';

const routes: RouterConfig = [
    {path:'', component: MoviesComponent},
    {path:'movie/:id', component: MovieComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];