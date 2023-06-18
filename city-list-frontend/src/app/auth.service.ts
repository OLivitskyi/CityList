import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private token = new BehaviorSubject<string | null>(localStorage.getItem('auth_token'));

constructor(private http: HttpClient) { }

login(username: string, password: string): Observable<any> {
const body = new HttpParams()
.set('username', username)
.set('password', password);
const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
return this.http.post<any>('/api/login', body.toString(), { headers, observe: 'response' }).pipe(
tap(response => {
const authToken = response.headers.get('Authorization');
if (authToken) {
this.storeToken(authToken);
}
})
);
}

private storeToken(token: string): void {
localStorage.setItem('auth_token', token);
this.token.next(token);
}

hasRole(role: string): boolean {
return true; // Remove this line and replace it with your implementation
}
}
