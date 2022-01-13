import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor(private http: HttpClient) {}

  getProduct() {
    // https://fakestoreapi.com/products
    // after running "json-server --watch db.json" in backend folder you will see books list sir
    return this.http.get<any>('http://localhost:5000/books').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
