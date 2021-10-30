import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'admin', component: AdminSectionComponent },
  { path: 'header', component: HeaderSectionComponent },
  { path: 'home', component: HomeSectionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
// const appRoutes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
