import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../services/dashboard.service';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent {
  allIssues: any = [];
  displayedColumns: string[] = ['id','issuetitle', 'sprintName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 
  constructor(private dashboardService:DashboardService) {
 
  }
 
  ngOnInit(): void {
   this.fetchAllIssues();
 }
 
 fetchAllIssues() {
     this.dashboardService.getAllIssue().subscribe((response:any)=>{
       if(response){
         this.allIssues = response;
         this.dataSource = new MatTableDataSource(this.allIssues);
         console.log(this.allIssues, 'allIssues');
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
 