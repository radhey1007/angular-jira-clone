import { Component } from '@angular/core';
import { sidebarData } from './constant/sidenav.constant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Issue Tracker';
  sidemenu = sidebarData;

  
  



}
