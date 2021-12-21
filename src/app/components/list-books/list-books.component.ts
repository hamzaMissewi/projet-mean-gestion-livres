import { Component, OnInit } from '@angular/core';
import { booksData } from 'src/app/shared/books-data';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  public books = booksData;

  constructor() {}

  ngOnInit(): void {
    // this.books = this.booksService.BooksArray;
  }
}
