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
 currentSprint:any = [];
 backlogSprint:any = [];
 closedSprint:any = [];
 sprintId: any;
 allIssueList:any = [];
issueData:any = [];
 constructor(private dashboardService:DashboardService) {

 }

 ngOnInit(): void {
  this.fetchAllSprint();
  this.fetchAllIssue();
}

 fetchAllSprint() {
    this.dashboardService.getAllSprint().subscribe((response:any)=>{
      if(response){
        this.allsprint = response;
        this.dataSource = new MatTableDataSource(this.allsprint);
        this.getClosedSprint();
        this.getCurrentSprint();
        this.getBacklogSprint();
        console.log(this.allsprint, 'allsprint');
      }
    },err=> {
      console.log(err);
    });
 }

 getCurrentSprint(){
  this.currentSprint = this.allsprint.filter((element:any) => element.isActive && element.status==='In Progress');
 }

 getClosedSprint(){
  this.closedSprint = this.allsprint.filter((element:any) => !element.isActive && element.status==='Closed');
 }

 getBacklogSprint(){
  this.backlogSprint = this.allsprint.filter((element:any) => element.isActive && element.status==='Not Started');
 }

 onPanelOpened(item: any) {
   console.log(item, '======');
   this.sprintId = item.id; 
   this.issueData = this.allIssueList.filter((element:any) => element.sprintId==this.sprintId);
 }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  fetchAllIssue() {
    this.dashboardService.getAllIssue().subscribe((response:any)=>{
      if(response){
        this.allIssueList = response;
      }
    },err=> {
      console.log(err);
    });
 }

}
