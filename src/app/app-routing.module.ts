import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/AuthGurad/auth.guard';


export const routes: any = [
  { path: '', redirectTo: '/login', pathMatch: 'full' , label:'Login' },
  { path: 'login', component: LoginComponent,label:'Login' },
  { path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), 
  canActivate: [AuthGuard] , label:'Dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
