import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { AuthService } from '../auth.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
selector: 'app-city-list',
templateUrl: './city-list.component.html',
styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
cities: City[] = [];
searchTerm: string = '';
page: number = 0;
size: number = 10;
totalElements: number = 0;

constructor(public cityService: CityService, public authService: AuthService) {}

ngOnInit() {
this.loadCities();
}

loadCities() {
if (this.searchTerm) {
this.cityService.searchByName(this.searchTerm, this.page, this.size).subscribe((data) => {
this.cities = data.content;
this.totalElements = data.totalElements;
});
} else {
this.cityService.findAll(this.page, this.size).subscribe((data) => {
this.cities = data.content;
this.totalElements = data.totalElements;
});
}
}
onPageChange(event: PageEvent): void {
this.page = event.pageIndex;
this.size = event.pageSize;
this.loadCities();
}
onSearch() {
this.loadCities();
}
}
