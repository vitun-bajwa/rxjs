import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
