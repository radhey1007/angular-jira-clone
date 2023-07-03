import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import {MatTableDataSource} from '@angular/material/table';
import { SprintInterface } from './Interfaces/sprint.interface';

const ELEMENT_DATA: SprintInterface[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 allsprint: any = [];
 displayedColumns: string[] = ['id','title', 'startDate', 'endtDate', 'isActive','status'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 constructor(private dashboardService:DashboardService) {

 }

 ngOnInit(): void {
  this.fetchAllSprint();
}

 fetchAllSprint() {
    this.dashboardService.getAllSprint().subscribe((response:any)=>{
      if(response){
        this.allsprint = response;
        this.dataSource = new MatTableDataSource(this.allsprint);
        console.log(this.allsprint, 'allsprint');
      }
    },err=> {
      console.log(err);
    });
 }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
