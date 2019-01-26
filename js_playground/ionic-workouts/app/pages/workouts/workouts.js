import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Page({
    templateUrl: 'build/pages/workouts/workouts.html',
    providers: [WorkoutService]
})

export class WorkoutsPage {
    static get parameters(){
        return [[NavController], [NavParams], [WorkoutService]];
    }
    
    constructor(nav, navParams, workoutService){
        this.nav = nav;
        this.workoutService = workoutService;
        this.workouts;
        
        this.workoutService.getWorkouts().subscribe(workouts => {
            this.workouts = workouts;
        });
    }
    
    ngOnInit(){
        this.workoutService.getWorkouts().subscribe(workouts => {
            this.workouts = workouts;
        });
    }
    
    workoutSelected(event, workout){
        this.nav.push(WorkoutDetailsPage, {
            workout: workout
        });
    }
}