import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root',
})
export class AuthService {
private _isAuthenticated = false;

login(username: string, password: string) {
    // to do
this._isAuthenticated = true;
}

logout() {
this._isAuthenticated = false;
}

isAuthenticated(): boolean {
return this._isAuthenticated;
}

hasRole(role: string): boolean {
    // to do
return true;
}
}
