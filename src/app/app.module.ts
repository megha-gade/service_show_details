import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import{UserService}from './services/user.service';
import { UserDetsilsComponent } from './user-detsils/user-detsils.component'

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserDetsilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
