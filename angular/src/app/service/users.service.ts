import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

readonly APIUrl = 'http://192.168.1.113/api';
constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any) {
    return this.http.post(this.APIUrl + '/users', user);
  }

  loginUser(user: any) {
    return this.http.post(this.APIUrl + '/login_check', user);
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserId(){
    return localStorage.getItem('userId');
  }

  getUserProfil(id: any) {
    return this.http.get(this.APIUrl + '/users/' + id);
  }
}
