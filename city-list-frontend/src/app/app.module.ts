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
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
AppComponent,
LoginComponent,
CityListComponent,
CityEditComponent,
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
MatPaginatorModule,
MatCardModule,
AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule { }
