import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public host = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  // public getBooks(page) {
  //   return this.httpClient.get((BooksArray) => this.BooksArray);
  // }

  // constructor(private heroService: HeroService) {}

  // public getBooks(page: number, size: number) {
  //   return this.httpClient.get(this.host + '/api/books');
  // }

  // public getResource(url: string): Observable<Book> {
  //   return this.httpClient.get<Book>(url);
  // }
  public deleteResource(url: string) {
    return this.httpClient.delete(url);
  }

  public updateResource(url: string, data: any) {
    return this.httpClient.put(url, data);
  }
}
