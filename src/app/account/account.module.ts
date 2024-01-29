import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';

let accountRoutes:Routes=[
  {path:"login/:returnURL",component: LoginComponent},
  {path:"register",component: RegisterComponent},
  {path:"profile",component: ProfileComponent},
]


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
        FormsModule,
        RouterModule.forChild(accountRoutes),
        HttpClientModule,
        ReactiveFormsModule
  ]
})
export class AccountModule { }
