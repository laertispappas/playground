import {Page} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Page({
    templateUrl: 'build/pages/weather/weather.html',
    providers: [WeatherService]
})

export class WeatherPage {
    static get parameters(){
        return [[WeatherService]];    
    }
        
    constructor(weatherService){
        this.weatherService = weatherService;    
        this.zmw;
        this.searchStr;
        this.weather;
        this.results;
    }
    
    ngOnInit(){
        this.getDefaultCity();
        this.weatherService.getWeather(this.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
        });
    }
    
    getQuery(){
        this.weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS
        });
    }
    
    chooseCity(city){
        this.results = [];
        this.weatherService.getWeather(city.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
        });
        
    }
    
    getDefaultCity(){
        if(localStorage.city !== undefined){
            this.zmw = JSON.parse(localStorage.city).zmw;
        } else {
            this.zmw = '02101.1.99999';   
        }
    }
    
}
