import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public host = 'http://localhost:5000'; // backend express
  constructor(private httpClient: HttpClient) {}

  // public getCategory(page: number, size: number) {
  //   return this.httpClient.get(
  //     this.host + '/categories?page=' + page + '&size=' + size
  //   );
  // }
}
