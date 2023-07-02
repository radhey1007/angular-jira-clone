import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const isValidUser = username === 'admin' && password === 'password';
    if (isValidUser) {
      this.isLoggedInSubject.next(true);
    }

    return this.isLoggedIn$;
  }

  logout(): void {
    
    this.isLoggedInSubject.next(false);
  }
}
