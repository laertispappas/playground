import { Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [MovieService]
})
export class MovieComponent implements OnInit{ 
    movie:Object;
    
    constructor(private router:ActivatedRoute, private _movieService: MovieService){
        
    }
    
    ngOnInit(){
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                console.log(movie);
                this.movie = movie;
            })
        })
    }
}
