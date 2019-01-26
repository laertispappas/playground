import {Page, NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';

@Page({
  templateUrl: 'build/pages/workout-details/workout-details.html',
  providers: [WorkoutService]
})
export class WorkoutDetailsPage {
    
    static get parameters(){
        return [[NavController], [NavParams], [WorkoutService]];
    }
    
    constructor(nav, navParams, workoutService) {
        this.workoutService = workoutService;
        this.nav = nav;
        this.navParams = navParams;
        this.workout = this.navParams.get('workout');
    }
    
    deleteWorkout(workoutId){
       this.workoutService.deleteWorkout(workoutId).subscribe(data => {
           this.result = data
       },
       err => console.log(err),
       () => console.log('Workout Deleted'));
       
       this.nav.setRoot(WorkoutsPage);
    }
}
