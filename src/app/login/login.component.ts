import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService:AuthService) { }

  login() {
    this.authService.login(this.username,this.password).subscribe((res:any)=> {
      if(res){
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
       } else {
       this.logout();
       }
    }) 
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }




}
