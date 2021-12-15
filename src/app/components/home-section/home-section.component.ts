import { Component, OnInit } from '@angular/core';
import { booksData } from 'src/app/shared/dummy_data';
// import { CrudBooksService } from 'src/app/services/book.service';
// import { NgForm } from '@angular/forms';
// import { Book } from 'src/app/shared/book.model';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  // providers: [CrudBooksService],
})
export class HomeSectionComponent implements OnInit {
  // public books: [];
  // public books: any;
  public booksList = booksData;

  constructor(
    // private booksDummyData: booksData,
    // private booksService: CrudBooksService
  ) {}

  ngOnInit() {
    // this.books = this.booksDummyData.BooksArray;
    // this.books = this.getLivresFromApi();
    console.log(this.booksList)
  }

  // getLivresFromApi(): void {
  //   this.booksService.getAllBooks().subscribe(
  //     (data: any) => {
  //       this.books = data;
  //       console.log('Response from Api is ', data);
  //     },
  //     (err) => {
  //       console.log('error is ', err);
  //     }
  //   );
  // }

  // refreshBookList() {
  //   this.booksService.getAllBooks().subscribe((res) => {
  //     this.booksService.books = res as Book[];
  //   });
  // }

  
}
