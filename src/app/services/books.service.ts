import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public host: string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  public getBooks(page: number, size: number) {
    return this.httpClient.get(this.host + '/api/books');
  }

  
  public getResource(url: string): Observable<Book> {
    // var test = this.httpClient.get(url);
    // console.log(test);
    return this.httpClient.get<Book>(url);
  }
  public deleteResource(url: string) {
    return this.httpClient.delete(url);
  }

  public updateResource(url: string, data: any) {
    return this.httpClient.put(url, data);
  }
}
