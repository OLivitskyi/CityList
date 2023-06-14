import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';


const routes: Routes = [
{ path: 'city-list', component: CityListComponent },
{ path: 'city-edit', component: CityEditComponent },
{ path: '', redirectTo: 'city-list', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
