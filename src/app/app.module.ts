import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminSectionComponent } from './modules/admin/admin-section/admin-section.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { LocalStorageService } from './services/local-storage.service';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './shared/filter.pipe';
import { HamzaCartComponent } from './components/books-cart/hamza-cart.component';
import { CartProductService } from './services/cart-product.service';
@NgModule({
  declarations: [
    AppComponent,
    AdminSectionComponent,
    HomeSectionComponent,
    HeaderSectionComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ListBooksComponent,
    FilterPipe,
    HamzaCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [CartService, LocalStorageService, CartProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
