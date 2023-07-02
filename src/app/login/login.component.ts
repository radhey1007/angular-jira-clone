import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators,FormBuilder, FormGroup, } from '@angular/forms';
import { AuthService } from 'src/services/auth.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  usernameFormControl!: FormControl<string | null>;
  passwordFormControl!: FormControl<string | null>;
  loginForm!: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }>;

  constructor(private router: Router, private authService:AuthService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if(localStorage.getItem('isLoggedIn')==='true'){
      this.router.navigate(['/dashboard']);
    }

  }

  login(username:string,password:string) {   
      this.authService.login(username,password).subscribe((res:any)=> {
        if(res){
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
         } else {
         this.logout();
         }
      });    
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username :any = this.loginForm.controls.username.value;
      const password :any = this.loginForm.controls.password.value;      
      this.login(username, password);
    } else {
      console.log('Please fill all the field');
    } 
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }




}
