import { Injectable, OnInit } from '@angular/core';
import { sidebarData } from './../app/constant/sidenav.constant';
import { AuthService } from './auth.services';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLogin:boolean = false;

  constructor(private authService:AuthService) { }
  
  getSideMenu() :any{
    const isLogin  = localStorage.getItem('isLoggedIn');
    if(isLogin=='true'){
       return sidebarData.filter((element:any) => element.path!=='login');
    } else {
       return sidebarData.filter((element:any) => element.isDefaultVisible); 
    }
  }



}