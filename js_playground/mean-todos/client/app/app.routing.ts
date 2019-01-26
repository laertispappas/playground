// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component'

const appRoutes: Routes = [
  {
    path: '',
    component:TodosComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);