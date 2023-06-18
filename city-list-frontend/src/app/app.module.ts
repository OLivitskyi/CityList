import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CityListComponent } from './city-list/city-list.component';

@NgModule({
declarations: [
AppComponent,
LoginComponent,
CityListComponent
],
imports: [
BrowserModule,
FormsModule,
HttpClientModule,
BrowserAnimationsModule,
MatInputModule,
MatFormFieldModule,
MatIconModule,
MatButtonModule,
MatToolbarModule,
MatListModule,
RouterModule.forRoot([])
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
