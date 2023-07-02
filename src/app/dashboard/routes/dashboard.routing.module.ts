import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { SprintComponent } from '../sprint/sprint.component';
import { IssueComponent } from '../issue/issue.component';
import { BacklogComponent } from '../backlog/backlog.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sprint', component: SprintComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'backlog', component: BacklogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }