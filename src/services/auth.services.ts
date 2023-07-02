import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    const isValidUser = username === 'admin' && password === 'password';
    if (isValidUser) {
      this.publishLogin(true);
    }
    return this.isLoggedIn$;
  }

  logout(): void {    
    localStorage.setItem('isLoggedIn','false');
    this.publishLogin(false);
    this.router.navigate(['/login']);
  }

  publishLogin(isLoggedIn:boolean){
    this.isLoggedInSubject.next(isLoggedIn);
  }

}
