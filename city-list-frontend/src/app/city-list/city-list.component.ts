import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
selector: 'app-city-list',
templateUrl: './city-list.component.html',
styleUrls: ['./city-list.component.less']
})
export class CityListComponent implements OnInit {
cities: City[] = []; // Initialize with an empty array

constructor(private cityService: CityService) { }

ngOnInit() {
this.cityService.findAll().subscribe(data => {
console.log('Received data:', data); // Log the received data
this.cities = data.content;
});
}
}
