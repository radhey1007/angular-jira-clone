import { Component, OnInit } from '@angular/core';
import { sidebarData } from './constant/sidenav.constant';
import { CommonService } from 'src/services/common.service';
import { AuthService } from 'src/services/auth.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Issue Tracker';
  sidemenu = sidebarData;

  constructor(private commonService:CommonService,private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
    //track login State for handiling the sidenav
    this.authService.isLoggedIn$.subscribe((isLogin:boolean)=> {
      setTimeout(()=> {
        this.sidemenu = this.commonService.getSideMenu();
      }, 10)
    });

  }
  
  handleNav(sidenav:any){
    if(sidenav.path=='logout'){
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

 

}
