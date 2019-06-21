import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  
  loginsearch(email: any,password:any) {

    return this.http.get(`${this.baseUrl}/search/${password}/${email}`);
  }
  signup(username:any,password:any,email:any)
  {
    console.log(password);
  console.log(email);
    return this.http.get(`${this.baseUrl}/signup/${username}/${password}/${email}`);
  }
} 
