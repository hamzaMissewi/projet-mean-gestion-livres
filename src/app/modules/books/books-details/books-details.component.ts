import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { booksData } from 'src/app/shared/books-data';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css'],
})
export class BooksDetailsComponent implements OnInit {
  public book?: any;
  // public book?: object;
  // public book: object = {};

  constructor(
    private route: ActivatedRoute // private localStorageService: LocalStorageService, // private cartService: CartService,
  ) // private bookService: bookService
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookId = params.get('id');
      // this.bookService.get(bookId!).subscribe((book) => (this.book = book));
      this.book = booksData.filter((book) => book.id == bookId)[0];
      // LocalStorageService.getItem()
      // this.bookService.get(bookId!).subscribe((book) => (this.book = book));
      this.book = booksData.filter((book) => book.id == bookId)[0];

      // console.log(bookId)
    });
  }
}
