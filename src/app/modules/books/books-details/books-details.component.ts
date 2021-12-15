import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { booksData } from 'src/app/shared/dummy_data';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css'],
})
export class BooksDetailsComponent implements OnInit {
  public book?: any;
  // public course?: object;
  // public course: object = {};

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // const courseId = params.get('id');
      const bookId = params.get('id');
      // this.book = booksData.filter((book) => book.id == bookId)[0];
      // LocalStorageService.getItem()
      // console.log(bookId)
      // this.course = books.filter(course => course.id == courseId)[0];
      // this.book = booksData.filter(book => book.id == bookId)[0];
    });
  }
}
