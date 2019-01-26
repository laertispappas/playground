"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map