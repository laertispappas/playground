"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('../../services/movie.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var MovieComponent = (function () {
    function MovieComponent(router, _movieService) {
        this.router = router;
        this._movieService = _movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            _this._movieService.getMovie(id).subscribe(function (movie) {
                console.log(movie);
                _this.movie = movie;
            });
        });
    };
    MovieComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie',
            templateUrl: 'movie.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, movie_service_1.MovieService])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map