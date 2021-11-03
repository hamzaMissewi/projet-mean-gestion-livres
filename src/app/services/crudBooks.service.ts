import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public host = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

}
