import { bootstrap }    from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms()
])
