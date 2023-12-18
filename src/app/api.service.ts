import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'https://dummyjson.com/carts';
  api1 = 'https://dummyjson.com/users';
  constructor(private http:HttpClient) { }
  getId():any{
   return this.http.get(this.api)
  }
  getUsers():any{
   return this.http.get(this.api1)
  }
}
