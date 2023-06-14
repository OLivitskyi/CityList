import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
selector: 'app-city-edit',
templateUrl: './city-edit.component.html',
styleUrls: []
})
export class CityEditComponent implements OnInit {
city: City;

constructor(
private route: ActivatedRoute,
private router: Router,
private cityService: CityService
) {
this.city = { id: 0, name: '', photo: '' };
}

ngOnInit() {
this.route.params.subscribe(params => {
const id = params['id'];
if (id) {
this.cityService.get(id).subscribe((city: City) => {
if (city) {
this.city = city;
} else {
console.error(`City with id '${id}' not found, returning to list`);
this.gotoList();
}
});
}
});
}

onSubmit() {
this.cityService.save(this.city).subscribe(result => this.gotoList());
}

gotoList() {
this.router.navigate(['/city-list']);
}
}
