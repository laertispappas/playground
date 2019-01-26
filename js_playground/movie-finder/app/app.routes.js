"use strict";
var router_1 = require('@angular/router');
var movies_component_1 = require('./components/movies/movies.component');
var movie_component_1 = require('./components/movie/movie.component');
var routes = [
    { path: '', component: movies_component_1.MoviesComponent },
    { path: 'movie/:id', component: movie_component_1.MovieComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map