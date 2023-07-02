import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  
  getAllSprint() {  
    const url= this.baseUrl + 'sprint';
    return this.http.get<any[]>(url);
  }

  getAllIssue() {
    const url= this.baseUrl + 'issue';
    return this.http.get<any[]>(url);
  }

  

}