import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import {LogsComponent} from './components/logs/logs.component';

@NgModule({
  imports: [ 
            BrowserModule, 
            FormsModule, 
            HttpModule 
          ],
  declarations: [ AppComponent, LogsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }