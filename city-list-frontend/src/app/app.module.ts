import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
AppComponent,
CityListComponent,
CityEditComponent
],
imports: [
AppRoutingModule,
FormsModule,
BrowserModule,
BrowserAnimationsModule,
HttpClientModule,
MatButtonModule,
MatCardModule,
MatInputModule,
MatListModule,
MatToolbarModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
