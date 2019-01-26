import {Page, NavController} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';

@Page({
    templateUrl: 'build/pages/add-workout/add-workout.html',
    providers: [WorkoutService]
})

export class AddWorkoutPage {
    static get parameters(){
        return [[NavController], [WorkoutService]];  
    }
    
    constructor(nav, workoutService){
        this.nav = nav;
        this.workoutService = workoutService;
        this.title;
        this.note;
        this.type;
    }
    
    onSubmit(){
       var workout = {
           title: this.title,
           note: this.note,
           type: this.type
       }
       
       // Add Workout 
       this.workoutService.addWorkout(workout).subscribe(data => {
           this.result = data
       },
       err => console.log(err),
       () => console.log('Workout Added'));
       
       this.nav.setRoot(WorkoutsPage);
    }
}