import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// si on veut integrer routing module f west el app module
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AccueilBiblioComponent } from './components/admin-section/admin-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AppRouting2Module } from './app-routing-2.module';

// const routes: Routes = [];
@NgModule({
  declarations: [
    // enregistrement de component (CLI)
    AppComponent,
    AdminSectionComponent,
    HomeSectionComponent,
    HeaderSectionComponent,
    ErrorComponent,
    BooksComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  // imports: [
  //   BrowserModule,
  //   //  AppRoutingModule,
  //     RouterModule.forRoot(routes),
  //   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
