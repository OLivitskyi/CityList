import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city';
import { Page } from './page';

@Injectable({
providedIn: 'root'
})
export class CityService {
private baseUrl = 'http://localhost:8080/api/cities';

constructor(private http: HttpClient) {
}
findById(id: number): Observable<City> {
return this.http.get<City>(`${this.baseUrl}/${id}`);
}
public findAll(page: number = 0, size: number = 10): Observable<any> {
return this.http.get<any>(`${this.baseUrl}?page=${page}&size=${size}`);
}
public get(id: number): Observable<City> {
return this.http.get<City>(`${this.baseUrl}/${id}`);
}

save(city: City): Observable<City> {
return this.http.post<City>(this.baseUrl, city);
}

update(city: City): Observable<City> {
return this.http.put<City>(`${this.baseUrl}/${city.id}`, city);
}

searchByName(name: string, page: number, size: number): Observable<Page<City>> {
const params = new HttpParams()
.set('name', name)
.set('page', String(page))
.set('size', String(size));
return this.http.get<Page<City>>(`${this.baseUrl}/search`, { params });
}
delete(id: number): Observable<any> {
return this.http.delete(`${this.baseUrl}/${id}`);
}
}
