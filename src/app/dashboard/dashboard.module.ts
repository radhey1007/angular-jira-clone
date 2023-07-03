import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './routes/dashboard.routing.module';
import { IssueComponent } from './issue/issue.component';
import { SprintComponent } from './sprint/sprint.component';
import { BacklogComponent } from './backlog/backlog.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    IssueComponent,
    SprintComponent,
    BacklogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
