import { Component, OnInit } from '@angular/core';
// import { courses } from 'src/app/shared/courses-list';
import { booksData } from 'src/app/shared/dummy_data';
import { CartService } from 'src/app/services/cart.service';
import { bookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  public booksList: any = booksData;
  // public booksList: any = [];
  // public cartContent: any[] = [];

  // const courses = [id,]
  // constructor(private cartService: CartService) {}
  constructor(
    private cartService: CartService,
    private bookService: bookService
  ) {}

  ngOnInit(): void {
    console.log(this.booksList);
    this.bookService.all().subscribe((res) => (this.booksList = res));
    // this.addToCart()
    // this.cartContent = JSON.parse(localStorage.getItem('cart') || '[]')
    // this.addToCart()
  }

  public addToCart(id: string) {
    this.cartService.add(id);
  }
  // public addToCart(id: string) {
  // alert('add to cart');
  // alert(id)
  // api global web stockage
  // local storage vs session storage
  // this.cartContent.push(id);
  // const course = this.cartContent.filter([]);
  // localStorage.setItem('cart', this.cartContent.toString());
  // localStorage.setItem('cart', JSON.stringify(this.cartContent));
  // }
}
