import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 allsprint: any = [];

 constructor(private dashboardService:DashboardService) {

 }

 ngOnInit(): void {
  this.fetchAllSprint();
}

 fetchAllSprint() {
    this.dashboardService.getAllSprint().subscribe((response:any)=>{
      if(response){
        this.allsprint = response;
        console.log(this.allsprint, 'allsprint');
      }
    },err=> {
      console.log(err);
    });
 }

}
