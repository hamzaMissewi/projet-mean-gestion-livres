import { Component, OnInit } from '@angular/core';
import { booksData } from 'src/app/shared/dummy_data';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  // providers: [booksData],
})
export class ListBooksComponent implements OnInit {
  // books = [];
  public books = booksData;

  // constructor(private booksService: booksData) {}
  constructor(){}

  ngOnInit(): void {
    // this.books = this.booksService.BooksArray;
  }
}
