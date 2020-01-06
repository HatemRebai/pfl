import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AddsujetComponent } from './sujet/addsujet/addsujet.component';
import { ListsujetComponent } from './sujet/listsujet/listsujet.component';

const routes: Routes = [

  {path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent },
  {path: '', component: AddsujetComponent },
  { path: 'home', redirectTo: '/addsujet', pathMatch: 'full' },
  { path: 'login', component: ListsujetComponent },
  { path: 'login', redirectTo: 'listesujet', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
