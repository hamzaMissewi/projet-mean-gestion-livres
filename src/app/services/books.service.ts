import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  BooksArray = [
    {
      id: 1,
      titre: 'math',
      auteur: 'colby convigton',
      prix: 500,
      reviews: 1997,
      category: 'science',
      imageUrl: '../../assets/images/livre-math.jpeg',
      published_date: '10/5/1998',
      nbre_page: 20,
    },
    {
      id: 2,
      titre: 'Poor economics',
      auteur: 'kumaru usman',
      prix: 300,
      reviews: 8228,
      category: 'science',
      imageUrl: '../../assets/images/phy-chimie-prepa.png',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 3,
      titre: 'physique',
      auteur: 'victor hugo',
      prix: 300,
      reviews: 8228,
      category: 'science',
      imageUrl: '../../assets/images/phy-chimie-prepa.png',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 4,
      titre: 'Predictably Irrational',
      auteur: 'Dr. dan ariely',
      prix: 300,
      reviews: 8228,
      category: 'economics',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/516XdxUXpNL._SX326_BO1,204,203,200_.jpg',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
  ];

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
