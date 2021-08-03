import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:5001/api/';
  httpOptions = {};
  constructor(private http:HttpClient) { }
  getUsers() {
    this.setHttpOptions();
    return this.http.get(this.baseUrl + "users", this.httpOptions)
  }

  getUser(id) {
    this.setHttpOptions
    return this.http.get(this.baseUrl + "users/" + id, this.httpOptions)
  }
  
  private setHttpOptions() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        })
      }
    }
  }
}
