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
var MoviesComponent = (function () {
    function MoviesComponent(_movieService) {
        var _this = this;
        this._movieService = _movieService;
        this._movieService.getPopular().subscribe(function (res) {
            _this.popularList = res.results;
        });
        this._movieService.getInTheaters().subscribe(function (res) {
            _this.theatersList = res.results;
        });
    }
    MoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this._movieService.searchMovies(this.searchStr).subscribe(function (res) {
            _this.searchRes = res.results;
        });
    };
    MoviesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movies',
            templateUrl: 'movies.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map