import { Component } from '@angular/core';

// Services
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [SpotifyService]
})
export class AppComponent  { name = 'Angular'; }
