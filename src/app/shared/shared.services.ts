import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  
 postSprint(data:any) {  
    const url= this.baseUrl + 'sprint';
    return this.http.post<any[]>(url,data);
  }

  postIssue(data:any) {
    const url= this.baseUrl + 'issue';
    return this.http.post<any[]>(url,data);
  }

  getAllSprint() {  
    const url= this.baseUrl + 'sprint';
    return this.http.get<any[]>(url);
  }

}