import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
selector: 'app-city-list',
templateUrl: './city-list.component.html',
styleUrls: []
})
export class CityListComponent implements OnInit {
cities: City[] = [];
searchTerm: string = '';
page: number = 0;
size: number = 10;
totalElements: number = 0;

constructor(private cityService: CityService) { }

ngOnInit() {
this.loadCities();
}

loadCities() {
if (this.searchTerm) {
this.cityService.searchByName(this.searchTerm, this.page, this.size).subscribe(data => {
this.cities = data.content;
this.totalElements = data.totalElements;
});
} else {
this.cityService.findAll(this.page, this.size).subscribe(data => {
this.cities = data.content;
this.totalElements = data.totalElements;
});
}
}

onSearch() {
this.loadCities();
}
}
