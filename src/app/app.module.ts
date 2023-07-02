import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/AuthGurad/auth.guard';
import { AuthService } from 'src/services/auth.services';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
