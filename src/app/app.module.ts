import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/person-input.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './person/person.service';

@NgModule({
  declarations: [AppComponent, PersonComponent, PersonInputComponent],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
