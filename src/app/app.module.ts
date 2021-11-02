import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
// import { BooksComponent } from '../../fichiers-extra/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AboutRoutingModule } from './about-routing.module';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdminSectionComponent,
    HomeSectionComponent,
    HeaderSectionComponent,
    ErrorComponent,
    // BooksComponent,
    LoginComponent,
    RegisterComponent,
    ListBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AboutRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
