import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  // books=[]
  BooksArray = [
    {
      id: 1,
      titre: 'math',
      auteur: 'colby convigton',
      category: 'science',
      published_date: '10/5/1998',
      reviews: 1997,
      nbre_page: 20,
      prix: '700 $',
      imageUrl: '../../assets/images/livre-math.jpeg',
    },
    {
      id: 2,
      titre: 'Poor economics',
      auteur: 'kumaru usman',
      prix: '500 $',
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
      prix: '300 £',
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
      prix: '300 $',
      reviews: 8228,
      category: 'economics',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/516XdxUXpNL._SX326_BO1,204,203,200_.jpg',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 5,
      titre: 'The Storyteller: Tales of Life and Music',
      auteur: 'Drave Grohl',
      prix: '26.94 $',
      reviews: 8228,
      category: 'Audio Book',
      imageUrl: 'https://m.media-amazon.com/images/I/51PsdEs6H9S.jpg',
      published_date: '10/11/2020',
      nbre_page: 50,
    },
    {
      id: 6,
      titre: 'The Storyteller: Tales of Life and Music',
      auteur: 'Drave Grohl',
      prix: '30.94 $',
      reviews: 8228,
      category: 'Audio Book',
      imageUrl: 'https://m.media-amazon.com/images/I/51PsdEs6H9S.jpg',
      published_date: '10/11/2020',
      nbre_page: 50,
    },
    {
      id: 7,
      titre: "The judge's List: A Novel",
      auteur: 'elon musk',
      prix: '30.94 $',
      reviews: '4,392 🌟',
      category: 'Biography',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71N7vj5cSkL._AC_UL210_SR195,210_.jpg',
      published_date: '10/9/2021',
      nbre_page: 50,
    },
    {
      id: 8,
      titre: "The judge's List: A Novel",
      auteur: 'Drave Grohl',
      prix: '30.94 $',
      reviews: '4,392 🌟',
      category: 'Biography',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL210_SR195,210_.jpg',
      published_date: '10/12/2019',
      nbre_page: 50,
    },
    {
      id: 9,
      titre: "The judge's List: A Novel",
      auteur: 'Drave Grohl',
      prix: '30.94 $',
      reviews: '4,392 🌟',
      category: 'Biography',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL210_SR195,210_.jpg',
      published_date: '10/12/2019',
      nbre_page: 50,
    },
  ];

  constructor() {}
  // constructor(private bookService: BooksService) {}

  ngOnInit() {
    // this.http
    //   .get('http://localhost:5000/books')
    //   .subscribe((books: [any]) => (this.books = books));
    // this.crudService.getData().subscribe((res: any[]) => {
    //   this.ItemsArray = res;
    // });
  }
}
