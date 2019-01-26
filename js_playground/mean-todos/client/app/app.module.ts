import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component'

import { TodoService } from './services/todo.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, AboutComponent, TodosComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }