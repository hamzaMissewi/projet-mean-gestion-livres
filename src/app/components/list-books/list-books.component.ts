import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  providers: [BooksService],
})
export class ListBooksComponent implements OnInit {
  books = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.BooksArray;
  }
}
