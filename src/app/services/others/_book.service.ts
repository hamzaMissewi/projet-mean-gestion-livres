import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

import { Book } from '../../shared/book.model';
@Injectable({
  providedIn: 'root',
})
export class CrudBooksService {
  // url: string;
  selectedBook: Book;
  books: Book[];
  baseURL = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) {}

  postBook(book: Book) {
    return this.http.post(this.baseURL, book);
  }

  // getAllBooks(): Observable<Book[]> {
  getAllBooks() {
    return this.http.get(this.baseURL);
    // .map((res: Response) => res.json());
  }

  getBook(id) {
    return this.http.get(`${this.baseURL}/${id}`);
    // return this.http.get(`http://localhost:5000/api/books/${id}`);
  }

  putBook(boo: Book) {
    return this.http.put(this.baseURL + `/${boo.book_id}`, boo);
  }

  // addBook(book: Book):void {
  //   return this.http.post(this.baseURL + '/', book)
  // }

  // Mo Yousfi
  // constructor(private http: HttpClient) {
  //   this.url = 'http://localhost:5000/api';
  // }
  // // get Books
  // public getBooks(): void {
  //   let endPoints = '';
  //   this.http.get(this.url + endPoints).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // // get Book by ID
  // public getBookById() {
  //   let id: number = 1;
  //   let endPoints = '/books/' + id;
  //   this.http.get(this.url + endPoints).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // // add new book
  // public addBook(bookData: Object) {
  //   let endPoints = '/books';
  //   this.http.post(this.url + endPoints, bookData).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // // update the book
  // public updateBook(bookData: Object) {
  //   let endPoints = '/Books/1';
  //   this.http.put(this.url + endPoints, bookData).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // // delete the book
  // public deleteBook() {
  //   let endPoints = '/Books/1';
  //   this.http.delete(this.url + endPoints).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
