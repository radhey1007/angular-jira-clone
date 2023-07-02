import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() sidebarToggled: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  toggleSidebar(): void {
    this.sidebarToggled.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}