import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';

@Injectable({
providedIn: 'root'
})
export class CityService {
private citiesUrl: string;

constructor(private http: HttpClient) {
this.citiesUrl = 'http://localhost:8080/api/cities';
}

public findAll(page: number = 0, size: number = 10): Observable<any> {
return this.http.get<any>(`${this.citiesUrl}?page=${page}&size=${size}`);
}
public get(id: number): Observable<City> {
return this.http.get<City>(`${this.citiesUrl}/${id}`);
}

public save(city: City) {
return this.http.post<City>(this.citiesUrl, city);
}

public update(city: City) {
return this.http.put<City>(`${this.citiesUrl}/${city.id}`, city);
}

public delete(id: number) {
return this.http.delete(`${this.citiesUrl}/${id}`);
}
}
