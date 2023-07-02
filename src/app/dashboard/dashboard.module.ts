import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './routes/dashboard.routing.module';
import { IssueComponent } from './issue/issue.component';
import { SprintComponent } from './sprint/sprint.component';
import { BacklogComponent } from './backlog/backlog.component';



@NgModule({
  declarations: [
    DashboardComponent,
    IssueComponent,
    SprintComponent,
    BacklogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
