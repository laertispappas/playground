import { Component } from '@angular/core';

import {FeathersService} from './services/feathers.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [FeathersService]
})

export class AppComponent { }
