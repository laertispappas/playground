import {Page, NavController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {WeatherPage} from '../weather/weather';

@Page({
    templateUrl: 'build/pages/settings/settings.html',
    providers: [WeatherService]
})

export class SettingsPage {
    static get parameters(){
        return [[NavController], [WeatherService]];
    }
    
    constructor(nav, weatherService){
        this.nav = nav;
        this.weatherService = weatherService;
        this.searchStr;
        this.defaultCity;
        this.results = [];
    }
    
    ngOnInit(){
        this.getDefaultCity();
    }
    
    getQuery(){
        this.weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
        });
    }
    
    getDefaultCity(){
        if(localStorage.city !== undefined){
            this.defaultCity = JSON.parse(localStorage.city).name;
        } else {
            this.defaultCity = '';   
        }
    }
    
    setDefaultCity(city){
        this.results = [];
        
        if(typeof(Storage) !== "undefined"){
            localStorage.city = JSON.stringify(city);
            this.searchStr = city.name;
            this.getDefaultCity();
        } else {
            console.log('LocalStorage Not Supported');
        }
    }
    
    saveChanges(){
        this.nav.setRoot(WeatherPage);
    }
}
