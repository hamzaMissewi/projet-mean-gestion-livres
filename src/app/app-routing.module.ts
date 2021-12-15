import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionComponent } from './modules/admin/admin-section/admin-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
// import { BooksComponent } from '../../fichiers-extra/books/books.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { Seance27Component } from './components/seance27/seance27.component';

// import { AddBook}
// import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminSectionComponent,
    children: [
      {
        path: 'add-book',
        component: AdminSectionComponent,
      },
      {
        path: 'list-books',
        component: ListBooksComponent,
      },
    ],
  },
  { path: 'header', component: HeaderSectionComponent },
  { path: 'home', component: HomeSectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'seance27', component: Seance27Component },
  {
    path: 'chariot',
    loadChildren: () =>
      import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then((m) => m.BooksModule),
  },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
