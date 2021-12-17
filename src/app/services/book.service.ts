import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class bookService {
  // private apiUrl = 'https://my-json-server.typicode.com/houcem-h/public_books_api/books';
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {}

  /**
   * Get all books
   * @returns Observable<book[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }

  /**
   * Get a book with the given id
   * @param id : book id
   * @returns Observable<book>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  /**
   * Create a new book
   * @param book new book to create
   */
  create(book: any) {
    return this.http.post(this.apiUrl, book);
  }

  /**
   * Update a book with the given id
   * @param id book id to update
   * @param book new book data
   */
  update(id: string, book: any) {
    return this.http.put(this.apiUrl + '/' + id, book);
  }

  /**
   * Delete a book with the given id
   * @param id book id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
